<template>
  <div>
    <el-button type="info" @click="loginOut">退出</el-button>
  </div>
</template>

<script>
export default {
  name: "home"
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
