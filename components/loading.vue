<template lang="html">
  <div
    v-loading.fullscreen.lock="loading">
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start () {
        this.loading = true
      },
      finish () {
        this.loading = false
      }
    }
  }
</script>

