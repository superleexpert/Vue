<template>
    <div>
        <!-- <div class="home">home</div>
        <router-link to="/list">列表页</router-link> -->
        <!-- Hello World -->
        <home-header></home-header>
        <home-swiper></home-swiper>
    </div>
</template>

<script>
// 局部组件
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'

export default{
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style>
    /* .home{
        font-size: 50px;
    } */
</style>
