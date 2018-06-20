<template>
  <main class="main">
    <breadcrumb :breadcrumbList="breadcrumbList"/>
    <div class="app-container">
      <slot/>
    </div>
  </main>
</template>

<script>
  import breadcrumb from '~/components/Layouts/breadcrumb'
  export default {
    name: 'page-header-layout',
    props:{
      breadcrumbList: {
        type: Array,
        default:()=>[]
      },
    },
    components :{
      breadcrumb,
    }
  }
</script>
