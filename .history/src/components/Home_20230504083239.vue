<template>
  <div>
    <el-button type="info" @click="loginOut">退出</el-button>
  </div>
  <el-container>
    <el-header>Header</el-header>
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
</style>
