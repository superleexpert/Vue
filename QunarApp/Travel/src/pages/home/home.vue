<template>
    <div>
        <!-- <div class="home">home</div>
        <router-link to="/list">列表页</router-link> -->
        <!-- Hello World -->
        <home-header></home-header>
    </div>
</template>

<script>
// 局部组件
import HomeHeader from './components/Header'
export default{
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>

<style>
    /* .home{
        font-size: 50px;
    } */
</style>
