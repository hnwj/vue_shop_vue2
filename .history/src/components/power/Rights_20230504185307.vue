<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡牌区域 -->
    <el-card>123</el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 权限列表数据
      rightsList: []
    }
  },
  created () {

  },
  methods: {
    getRightsList () {

    }
  }
}
</script>

<style>
</style>
