<template>
  <div class="standard-table" :class="{border:border}">
    <el-table

      v-bind="$props"
    style="width: 100%">
      <slot/>
    </el-table>
    <div class="standard-table-pagination">
      <el-pagination
        :current-page="page"
        :page-sizes="[20, 40, 100]"
        :page-size="limit"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="sizeChange"
        @current-change="currentChange"
        @prev-click="currentChange"
        @next-click="currentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss">
  @import '~assets/styles/var.scss';
  .standard-table {
    .standard-table-pagination {
      padding: 8px 10px;
      border-bottom: 1px solid $--border-color-base;
    }
    &.border {
      .standard-table-pagination {
        border-left: 1px solid  $--border-color-base;
        border-right: 1px solid $--border-color-base;
      }
    }
  }
</style>
<script>
  export default {
    methods: {
      sizeChange: function (limit) {
        console.warn('sizeChange', limit)
        this.$emit('change', {page: this.page, limit})
      },
      currentChange: function (page) {
        console.warn('currentChange', page)
        this.$emit('change', {page, limit: this.limit})
      }
    },
    props: {
      stripe: {
        type: Boolean,
        default: false
      },
      border: {
        type: Boolean,
        default: false
      },
      page: {
        type: Number,
        default: 1
      },
      limit: {
        type: Number,
        default: 20
      },
      total: {
        type: Number,
        default: 0
      },
      data: {
        type: Array,
        default: []
      }
    },
    mounted(){
      console.warn('mounted',this.$props)
    }
  }
</script>
