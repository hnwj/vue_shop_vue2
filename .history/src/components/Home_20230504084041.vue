<template>
  <!-- 主体区域 -->
  <el-container class="home-container">
    <el-header>
      <div></div>
      <el-button type="info" @click="loginOut">退出</el-button></el-header
    >
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'home',
  methods: {
    loginOut () {
      // 清空token
      window.sessionStorage.clear()
      //   跳转到login页面
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.el-container {
  background-color: #373d41;
}
.home-container {
  height: 100%;
}
.el-aside {
  background-color: #333744;
}
.el-main {
  background-color: #eaedf1;
}
</style>
