<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbList.length?breadcrumbList:list"  v-if="item" :key="index">
        <nuxt-link :to="{ path: item.url }" v-if="item.isLinkable">{{item.title }}</nuxt-link>
        <span v-else>{{item.title }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  import menu from './menu';
  import pathToRegexp from 'path-to-regexp';

  function getFlatMenuData(menus) {
    let keys = {};
    menus.forEach((item) => {
      if(item.path){
        keys[item.path] = { ...item };
      }
      if (item.children && item.children.length) {
        keys = { ...keys, ...getFlatMenuData(item.children) };
      }
    });
    return keys;
  }


   function urlToList(url) {
    const urllist = url.split('/').filter(i => i);
    return urllist.map((urlItem, index) => {
      return `/${urllist.slice(0, index + 1).join('/')}`;
    });
  }
   function getBreadcrumb(breadcrumbNameMap, url) {
    let breadcrumb = breadcrumbNameMap[url];
    if (!breadcrumb) {
      Object.keys(breadcrumbNameMap).forEach((item) => {
        if (pathToRegexp(item).test(url)) {
          breadcrumb = breadcrumbNameMap[item];
        }
      });
    }
    return breadcrumb || {};
  }

  function conversionFromLocation (pathname, breadcrumbNameMap) {
    // Convert the url to an array
    const pathSnippets = urlToList(pathname);
    // Loop data mosaic routing
    const extraBreadcrumbItems = pathSnippets.map((url, index) => {
      const currentBreadcrumb = getBreadcrumb(breadcrumbNameMap, url);
      const isLinkable =
        index !== pathSnippets.length - 1 && currentBreadcrumb.component;

      return currentBreadcrumb.title && !currentBreadcrumb.hideInBreadcrumb ? (
      {
        url,
        isLinkable,
        title:currentBreadcrumb.title
      }) : null;
    }).filter(item=>item);
    // Add home breadcrumbs to your head
    extraBreadcrumbItems.unshift( {
      url:'/',
      isLinkable:true,
      title:'首页'
    });
    return extraBreadcrumbItems
  }

  export default {
    name: 'breadcrumb',
    data:()=>{
      return {
        list:[]
      }
    },
    props:{
      breadcrumbList: {
        type: Array,
        default:()=>[]
      },
    },
    created(){
      const menuData= getFlatMenuData(menu)
      const routerConfig= this.$router.options.routes.reduce((obj,item)=>{
        const match =/(.+)\?$/.exec(item.path);
        if(match){
          const path = match[1];
          obj[path] = {...item,path};
        }
        else {
          obj[item.path] = item;
        }
        return obj
      },{});
      const routerData = {};
      // The route matches the menu


      Object.keys(routerConfig).forEach((path) => {
        // Regular match item name
        // eg.  router /user/:id === /user/chen
        const pathRegexp = pathToRegexp(path);
        const menuKey = Object.keys(menuData).find(key => pathRegexp.test(`${key}`));
        let menuItem = {};
        // If menuKey is not empty
        if (menuKey) {
          menuItem = menuData[menuKey];
        }
        let router = routerConfig[path];
        // If you need to configure complex parameter routing,
        // https://github.com/ant-design/ant-design-pro-site/blob/master/docs/router-and-nav.md#%E5%B8%A6%E5%8F%82%E6%95%B0%E7%9A%84%E8%B7%AF%E7%94%B1%E8%8F%9C%E5%8D%95
        // eg . /list/:type/user/info/:id
        router = {
          component:router.component,
          path:path,
          title: menuItem.title,
          authority: router.authority || menuItem.authority,
        };
        routerData[path] = router;
      });

      var path = this.$router.history.current.path;

      // Loop data mosaic routing
      var bread = conversionFromLocation(path,routerData)
      this.list = bread
    }
  }
</script>
