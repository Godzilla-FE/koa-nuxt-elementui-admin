<template>
  <div>
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
  </div>
</template>
<style scoped lang="scss"  rel="stylesheet/scss" >

</style>
<script>
  import StandardTable from '~/components/standard-table.vue';
  export default {
    components:{
      StandardTable
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
      routeChange:async function (current) {
        let {page,limit,total,data} = await  this.$store.dispatch('getTable', current.query);
        console.warn('routeChange',page,limit,total,data);
        this.page = page*1;
        this.limit = limit*1;
        this.total = total;
        this.data = data;
      },

    },
    watch: {
      "$route": "routeChange"
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
        total:48
      }
    },
    async asyncData ({ store, error ,query }) {
      console.warn('query',query);
      let res = await store.dispatch('getTable', query);
      return {
        data: res.data||[],
        page: res.page*1,
        limit: (res.limit||20)*1,
        total: res.total||0,
      }
    },
  }
</script>
