<template>
  <el-menu-item v-if="!data.children || !data.children.length"  :index="data.path||'/'">
    <i v-if="data.icon" :class="data.icon"/>
    <span slot="title">{{data.title}}</span>
  </el-menu-item>
  <el-submenu v-else-if="data.type!='group'" :index="data.path||'/'">
    <template slot="title" v-if="data.icon">
      <i :class="data.icon"></i>
      <span>{{data.title}}</span>
    </template>
    <template slot="title" v-else>
      {{data.title}}
    </template>
    <v-menu v-for="(item1,index) in data.children" :data="item1" :key="index"/>
  </el-submenu>
  <el-menu-item-group v-else :index="data.path||'/'">
    <template slot="title">
      {{data.title}}
    </template>
    <v-menu v-for="(item1,index) in data.children" :data="item1" :key="index"/>
  </el-menu-item-group>
</template>

</template>

<script>

  export default {
    name: 'v-menu',
    props: ['data'],
  }
</script>
