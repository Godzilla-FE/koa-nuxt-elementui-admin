<template>
  <div class="buttons">
    <el-card>
      <div slot="header" class="clearfix">
        <span>Standard Buttons</span>
      </div>
      <el-row :gutter="20">
        <el-col :span="3">
          Normal
        </el-col>
        <el-col :span="3">
          <el-button>默认按钮</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="primary">主要按钮</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="success">成功按钮</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="info">信息按钮</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="warning">警告按钮</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="danger">危险按钮</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="text">文字按钮</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="3">
          Disabled
        </el-col>
        <el-col :span="3">
          <el-button disabled>默认按钮</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="primary" disabled>主要按钮</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="success" disabled>成功按钮</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="info" disabled>信息按钮</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="warning" disabled>警告按钮</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="danger" disabled>危险按钮</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="text" disabled>文字按钮</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <div slot="header" class="clearfix">
        <span>Outline Buttons</span>
      </div>
      <el-row :gutter="20">
        <el-col :span="3">
          Normal
        </el-col>
        <el-col :span="3">
          <el-button plain>默认按钮</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="primary" plain>主要按钮</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="success" plain>成功按钮</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="info" plain>信息按钮</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="warning" plain>警告按钮</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="danger" plain>危险按钮</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="text" plain>文字按钮</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="3">
          Disabled
        </el-col>
        <el-col :span="3">
          <el-button plain disabled>默认按钮</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="primary" plain disabled>主要按钮</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="success" plain disabled>成功按钮</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="info" plain disabled>信息按钮</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="warning" plain disabled>警告按钮</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="danger" plain disabled>危险按钮</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="text" plain disabled>文字按钮</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>


</template>
<style scoped lang="scss"  rel="stylesheet/scss" >
  .buttons {
    .el-card {
      margin-bottom: 30px;

      .el-row {
        margin-bottom: 20px;
      }
    }
    .el-col {
      line-height: 38px;
      text-align: center;
    }
    .el-col .el-button {
      width:100%;
    }
   }
</style>
<script>

  export default {
    head() {
      return {
        title: `button`
      }
    },

  }
</script>
