<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片区域 -->
    <el-card>
      <el-row>
        <el-col :span="7">
          <el-input placeholder="请输入内容">
            <el-button
              slot="append"
              type="default"
              icon="el-icon-search"
            ></el-button> </el-input
        ></el-col>
        <el-col :span="4"> <el-button></el-button></el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
