<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 除了Detail页面，其他页面做缓存 -->
    <keep-alive exclude="Detail">
        <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
