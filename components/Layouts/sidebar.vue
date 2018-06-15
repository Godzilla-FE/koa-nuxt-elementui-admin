<style lang="scss"  rel="stylesheet/scss">

</style>

<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <el-menu
        :default-active="active"

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
