<template>
  <page-header-layout>
    <el-card>
      <standard-table :data="data" border stripe :page="page" :limit="limit" :total="total" @change="change">
        <el-table-column
          prop="userName"
          label="归属人"
        >
        </el-table-column>
        <el-table-column
          prop="identityId"
          label="京东PIN"
        >
        </el-table-column>
        <el-table-column
          prop="created"
          label="创建人">
        </el-table-column>
        <el-table-column
          prop="createdDate"
          label="创建时间"
          width="180">
          <template slot-scope="scope">
            {{scope.row.createdDate | moment("YYYY-MM-DD hh:mm:ss")}}
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="145">
          <template slot-scope="scope">
            <el-button size="mini" type="primary">编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </standard-table>
    </el-card>
  </page-header-layout>
</template>
<style scoped lang="scss" rel="stylesheet/scss">

</style>
<script>
  import StandardTable from '~/components/standard-table.vue';
  import PageHeaderLayout from '~/layouts/page-header-layout.vue';

  async function fetch(store, query) {
    var {limit = 20, page = 1} = query;
    var start = (page - 1) * limit;
    var length = limit;
    var res = await store.dispatch('getWhiteList', {start, length});
    if (!res.obj) {
      return {}
    }

    var {curPage, pageSize, total, data} = res.obj || {};
    return {
      data: data || [],
      page: curPage * 1,
      limit: (pageSize || 20) * 1,
      total: total || 0,
    }
  }

  export default {
    components: {
      StandardTable,
      PageHeaderLayout
    },
    head() {
      return {
        title: `白名单管理`
      }
    },
    methods: {
      change: function (query) {
        this.$router.push({path: '/system/whitelist/list', query})
      },
    },
    watch: {
      "$route.query": async function (query) {
        this.$nuxt.$loading.start()
        var r = await fetch(this.$store,query);
        this.$nuxt.$loading.finish()
        Object.assign(this,r)
      },
    },
    data() {
      return {
        limit: 20,
        page: 1,
        total: 0,
        data: [],
      }
    },
    async asyncData ({store, error, query}) {
      return await fetch(store,query);
    },
  }
</script>
