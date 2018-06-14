<style scoped>

</style>

<template>
  <app>
    <breadcrumb slot="breadcrumb"/>
    <nuxt/>
  </app>
</template>

<script>
  import app from '~/components/Layouts/app'
  import breadcrumb from '~/components/Layouts/breadcrumb'

  export default {
    components: {
      app,
      breadcrumb
    }
  }
</script>

