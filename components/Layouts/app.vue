<style lang="scss"  rel="stylesheet/scss">

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
