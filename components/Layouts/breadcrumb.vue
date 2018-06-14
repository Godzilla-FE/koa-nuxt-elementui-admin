<style lang="less"  rel="stylesheet/less">
  .breadcrumb {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: .75rem 1rem;
    margin-bottom: 1.5rem;
    list-style: none;
    background-color: #3a4149;
    border-radius: 0;
  }
  .breadcrumb {
    position: relative;
    border-radius: 0;
    border-bottom: 1px solid #23282c;
  }
  .breadcrumb {
    transition: left .25s,right .25s,width .25s;
  }
  .breadcrumb-item+.breadcrumb-item::before {
    display: inline-block;
    padding-right: .5rem;
    color: #f3f4f5;
    content: "/";
  }
  .breadcrumb-item+.breadcrumb-item {
    padding-left: .5rem;
  }
  .breadcrumb-item.active {
    color: #f3f4f5;
  }

  .breadcrumb-menu {
    margin-left: auto;
  }
</style>

<template>
  <ol class="breadcrumb">
    <li class="breadcrumb-item">Home</li>
    <li class="breadcrumb-item">
      <a href="#">Admin</a>
    </li>
    <li class="breadcrumb-item active">Dashboard</li>

    <li class="breadcrumb-menu d-md-down-none">
      <div class="btn-group" role="group" aria-label="Button group">
        <a class="btn" href="#">
          <i class="icon-speech"></i>
        </a>
        <a class="btn" href="./">
          <i class="icon-graph"></i> &nbsp;Dashboard</a>
        <a class="btn" href="#">
          <i class="icon-settings"></i> &nbsp;Settings</a>
      </div>
    </li>
  </ol>
</template>

<script>

  export default {
    name: 'breadcrumb',
  }
</script>
