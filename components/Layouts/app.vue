<style lang="scss"  rel="stylesheet/scss">
  .layout {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-height: 100vh;
  }

  .app-body .main {
    -ms-flex: 1;
    flex: 1;
    min-width: 0;
  }
  @media (min-width: 992px){
    .header-fixed .app-header {
      position: fixed;
      z-index: 1020;
      width: 100%;
    }
    .header-fixed .app-body {
      margin-top: 55px;
    }
  }
  @media (min-width: 576px) and (min-width: 992px){
    html:not([dir=rtl]) .aside-menu-lg-show.aside-menu-fixed  .main, html:not([dir=rtl]) .app-footer {
      margin-right: 250px;
    }
    html:not([dir=rtl])  .main, html:not([dir=rtl])  .app-footer {
      margin-left: 200px;
    }
    html:not([dir=rtl]) .sidebar-lg-show.sidebar-fixed.sidebar-minimized .main, html:not([dir=rtl]) .sidebar-lg-show.sidebar-fixed.sidebar-minimized .app-footer {
      margin-left: 65px;
    }

    html:not([dir=rtl]) .sidebar-minimized .sidebar .sidebar-nav .el-menu {
      &>.el-menu-item-group .el-menu-item-group__title {
        display: none;
      }
    }

  }
  .main >.app-container {
    width: 100%;
    padding: 0 30px;
    margin-right: auto;
    margin-left: auto;
  }
</style>

<template>
  <div class="layout header-fixed sidebar-fixed sidebar-lg-show" :class="{ 'sidebar-minimized' : sidebarCollapsed  }" >
    <app-header/>
    <div class="app-body">
      <sidebar :collapsed="sidebarCollapsed" @toggle="toggleSidebarCollapse"/>
      <main class="main">
        <slot name="breadcrumb"></slot>
        <div class="app-container">
          <slot/>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  import AppHeader from './header.vue';
  import sidebar from './sidebar.vue';
  export default {
    name: 'app',
    components: {
      AppHeader,
      sidebar
    },
    data:()=>{
      return {
        sidebarCollapsed:false
      }
    },
    methods:{
      toggleSidebarCollapse:function () {
        this.sidebarCollapsed = !this.sidebarCollapsed;
      }
    }
  }
</script>
