<style lang="scss"  rel="stylesheet/scss">
  html:not([dir=rtl]) .sidebar {
    margin-left: -200px;
  }
  .app-body .sidebar {
    -ms-flex: 0 0 200px;
    flex: 0 0 200px;
    -ms-flex-order: -1;
    order: -1;
  }
  .sidebar {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 0;
    color: #f3f4f5;
    background: #3a4149;
    border-right: 1px solid #23282c;


    .sidebar-nav {
      position: relative;
      -ms-flex: 1;
      flex: 1;
      overflow-x: hidden;
      overflow-y: auto;
    }

    .sidebar-minimizer {
      position: relative;
      -ms-flex: 0 0 50px;
      flex: 0 0 50px;
      background-color: rgba(0,0,0,.2);
      border: 0;
      &:before {
        position: absolute;
        top: 0;
        right: 0;
        width: 64px;
        height: 50px;
        content: "";
        background-image: url(data:image/svg+xml;charset=utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMSAxNCI+PHBhdGggZmlsbD0iIzczODE4ZiIgZD0iTTkuMTQ4IDIuMzUyIDUgNi41bDQuMTQ4IDQuMTQ4cS4xNDguMTQ4LjE0OC4zNTJ0LS4xNDguMzUybC0xLjI5NyAxLjI5N3EtLjE0OC4xNDgtLjM1Mi4xNDh0LS4zNTItLjE0OGwtNS43OTctNS43OTdxLS4xNDgtLjE0OC0uMTQ4LS4zNTJ0LjE0OC0uMzUybDUuNzk3LTUuNzk3cS4xNDgtLjE0OC4zNTItLjE0OHQuMzUyLjE0OGwxLjI5NyAxLjI5N3EuMTQ4LjE0OC4xNDguMzUydC0uMTQ4LjM1MnoiLz48L3N2Zz4=);
        background-repeat: no-repeat;
        background-position: center;
        background-size: 12.5px;
        transition: .3s;
      }
    }

    .el-menu {
      border-right: none;
    }

    .el-submenu .el-menu-item {
      min-width:199px;
    }
  }
  .el-menu--vertical .el-menu {
    border: 1px solid #23282c;
  }
  @media (min-width: 992px){
    .sidebar-fixed .app-header+.app-body .sidebar {
      height: calc(100vh - 55px);
    }
    html:not([dir=rtl]) .sidebar {
      margin-left: 0;
    }
    .sidebar-fixed .sidebar {
      position: fixed;
      z-index: 1019;
      width: 200px;
      height: 100vh;
    }
    .sidebar-minimized.sidebar-fixed .sidebar {
      width: 65px;
    }
    .sidebar-minimized .sidebar .sidebar-nav {
      overflow: visible;
      width: 64px;
    }
    .sidebar-minimized .sidebar .sidebar-minimizer::before {
      width: 100%;
      -webkit-transform: rotate(-180deg);
      transform: rotate(-180deg);
    }
  }
  @media (max-width: 991.98px){
    .sidebar {
      position: fixed;
      z-index: 1019;
      width: 200px;
      height: calc(100vh - 55px);
    }
  }
</style>

<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <el-menu
        :default-active="active"
        background-color="#3a4149"
        text-color="#f3f4f5"
        active-text-color="#ffd04b"
        :collapse="collapsed"
        :collapse-transition="false"
        :router="true"
      >
        <v-menu v-for="(item,index) in menu" :data="item" :key="index"/>
      </el-menu>
    </nav>
    <button class="sidebar-minimizer brand-minimizer" type="button" @click="$emit('toggle')"></button>
  </div>
</template>

<script>
  import VMenu from './menu.vue';
  import menu from './menu';
  export default {
    name: 'app-sidebar',
    components:{
      VMenu
    },
    data:function(){
      return {
        active:this.$router.history.current.path,
        menu
      }
    },
    methods:{
      onRouteChange:function (current) {
        this.active = current.path
      }
    },
    props:['collapsed'],
    watch: {
      // 如果路由有变化，会再次执行该方法
      "$route": "onRouteChange"
    }
  }
</script>
