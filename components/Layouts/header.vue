<style lang="less"  rel="stylesheet/less">
  @media (min-width: 992px){
    .header-fixed .app-header {
      position: fixed;
      z-index: 1020;
      width: 100%;
    }
  }
  .app-header, .app-footer, .sidebar, .main, .aside-menu {
    transition: margin-left .25s,margin-right .25s,width .25s,flex .25s;
    transition: margin-left .25s,margin-right .25s,width .25s,flex .25s,-ms-flex .25s;
  }

  .app-header {
    position: relative;
    -ms-flex-direction: row;
    flex-direction: row;
    height: 55px;
    padding: 0;
    margin: 0;
    background-color: #3a4149;
    border-bottom: 1px solid #23282c;

    .navbar-brand {
      display: -ms-inline-flexbox;
      display: inline-flex;
      -ms-flex-align: center;
      align-items: center;
      -ms-flex-pack: center;
      justify-content: center;
      width: 155px;
      height: 55px;
      padding: 0;
      margin-right: 0;
      background-color: transparent;
    }
    .navbar-toggler {
      min-width: 50px;
      padding: .25rem 0;
    }
    .navbar-toggler-icon {
      height: 23px;
      background-image:url(data:image/svg+xml;charset=utf8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAgMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggc3Ryb2tlPSIjZTRlN2VhIiBzdHJva2Utd2lkdGg9IjIuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMiIvPjwvc3ZnPg==)
    }
    .el-menu--horizontal {
      height: 54px;
      border-bottom: none;
      &>.el-submenu .el-submenu__title {
        height: 54px;
        line-height: 54px;
      }
    }
    .el-menu--horizontal>.el-menu-item {
      height: 54px;
      line-height: 54px;
      border-bottom: none;
    }
  }

  .app-header {
    -ms-flex: 0 0 55px;
    flex: 0 0 55px;
  }

  .navbar {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: .5rem 1rem;
  }
  .navbar-brand {
    display: inline-block;
    padding-top: .335938rem;
    padding-bottom: .335938rem;
    margin-right: 1rem;
    font-size: 1.09375rem;
    line-height: inherit;
    white-space: nowrap;
  }
  .navbar-toggler {
    padding: .25rem .75rem;
    font-size: 1.09375rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: .25rem;
    &:not(:disabled):not(.disabled) {
      cursor: pointer;
    }
  }
  .navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: "";
    background: no-repeat center center;
    background-size: 100% 100%;
  }
</style>

<template>
  <header class="app-header navbar">
    <a href="#" class="navbar-brand"></a>
    <button class="navbar-toggler sidebar-toggler d-md-down-none" type="button" data-toggle="sidebar-lg-show">
      <span class="navbar-toggler-icon"></span>
    </button>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#3a4149"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
  </header>
</template>

<script>

  export default {
    name: 'app-header',
  }
</script>
