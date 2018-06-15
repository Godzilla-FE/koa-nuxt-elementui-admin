/**
 * Created by zhangbohan on 18/6/14.
 */



export default [{
  title:'首页',
  icon:'el-icon-document',
  path:'/',
},{
  title:'组件',
  icon:'el-icon-location',
  children:[{
    title:'按钮',
    path:'/button',
  }]
},{
  title:'组件2',
  icon:'el-icon-location',
  type:'group',
  children:[{
    title:'按钮',
    icon:'el-icon-setting',
    path:'/button2',
  }]
},{
  title:'表格',
  path:'/table',
  icon:'el-icon-setting',
}]
