<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default{
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2000
      }
      // swiperList: [{
      //   id: '0001',
      //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/e5/59fad13a64807d02.jpg_750x200_713ae984.jpg'
      // },
      // {
      //   id: '0002',
      //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/5c/969bfa7af00a2702.jpg_750x200_b99b8e07.jpg'
      // }]
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
// 样式穿透 不受scoled的限制，wrapper下子组件只要出现swiper-pagination-bullet-active就会相应样式
// swiper-pagination显示内容是传递给swiper显示的
  .wrapper >>> .swiper-pagination-bullet-active
    background : white !important
    margin-bottom :10px
  .wrapper >>> .swiper-pagination-bullet
    margin-bottom :10px
  .wrapper
    overflow: hidden
    width : 100%
    height : 0
    padding-bottom :26.67%
    // 实现宽高比实现31.25比例
    background :#eee
    .swiper-img
      width: 100%;
</style>
