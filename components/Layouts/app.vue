<style lang="scss"  rel="stylesheet/scss">

</style>

<template>
  <div class="layout header-fixed sidebar-fixed sidebar-lg-show" :class="{ 'sidebar-minimized' : !sidebar.opened  }" >
    <app-header/>
    <div class="app-body">
      <sidebar :collapsed="!sidebar.opened" @toggle="toggleSideBar"/>
      <slot/>
    </div>
  </div>
</template>

<script>
  import AppHeader from './header.vue';
  import sidebar from './sidebar.vue';
  import { mapGetters } from 'vuex';
  export default {
    name: 'app',
    components: {
      AppHeader,
      sidebar
    },
    computed: {
      ...mapGetters([
        'sidebar',
      ])
    },
    methods: {
      toggleSideBar() {
        this.$store.dispatch('app/ToggleSideBar')
      },
    }
  }
</script>
