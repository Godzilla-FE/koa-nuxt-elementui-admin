<style lang="less"  rel="stylesheet/less">
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
  }
  .main >.app-container {
    width: 100%;
    padding: 0 30px;
    margin-right: auto;
    margin-left: auto;
  }
</style>

<template>
  <div class="layout sidebar-fixed sidebar-lg-show" :class="{ 'sidebar-minimized' : sidebarCollapsed  }" >
    <app-header></app-header>
    <div class="app-body">
      <sidebar  v-bind:collapsed="sidebarCollapsed" @toggle="toggleSidebarCollapse"></sidebar>
      <main class="main">
        <slot name="breadcrumb"></slot>
        <div class="app-container">
          <slot></slot>
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
