<template>
  <div>
    <el-button type="info" @click="loginOut">退出</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    loginOut () {
      window.sessionStorage.clear()
    }
  }
}
</script>

<style lang="less" scoped>
</style>
