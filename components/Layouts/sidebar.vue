<style lang="less"  rel="stylesheet/less">
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
      width: 199px;
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
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#3a4149"
        text-color="#f3f4f5"
        active-text-color="#ffd04b"
        :collapse="collapsed"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
        <el-menu-item index="8">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
        <el-menu-item index="9">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
        <el-menu-item index="10">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
        <el-menu-item index="11">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </nav>
    <button class="sidebar-minimizer brand-minimizer" type="button" @click="$emit('toggle')"></button>
  </div>
</template>

<script>

  export default {
    name: 'app-sidebar',
    props:['collapsed'],
  }
</script>
