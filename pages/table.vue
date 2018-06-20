<template>
  <page-header-layout>
    <el-card>
      <standard-table :data="data" border stripe :page="page" :limit="limit" :total="total" @change="change">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </standard-table>
    </el-card>
  </page-header-layout>
</template>
<style scoped lang="scss"  rel="stylesheet/scss" >

</style>
<script>
  import StandardTable from '~/components/standard-table.vue';
  import PageHeaderLayout from '~/layouts/page-header-layout.vue';

  async function fetch(store, query) {
    var {data, limit, total, page} = await store.dispatch('getTable', query);
    return {data, limit:limit*1, total:total*1, page:page*1}
  }

  export default {
    components:{
      StandardTable,
      PageHeaderLayout
    },
    head() {
      return {
        title: `table`
      }
    },
    methods:{
      change:function(query){
        this.$router.push({ path: '/table', query})
      },
    },
    watch: {
      "$route.query":  async function (query) {
        var r = await fetch(this.$store,query);
        Object.assign(this,r)
      },
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        limit:20,
        page:1,
        total:48,
      }
    },
    async asyncData ({store, error, query}) {
      return await fetch(store,query);
    },
  }
</script>
