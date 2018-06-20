<template>
  <page-header-layout>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card>
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
          dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </page-header-layout>
</template>

<style scoped>
  .title {
    margin: 50px 0;
  }
</style>
<script>
  import PageHeaderLayout from '~/layouts/page-header-layout.vue';
  export default {
    components: {
      PageHeaderLayout
    },
  }
</script>
