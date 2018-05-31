<template>
  <div class="banner">
    <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1804/c8/c88bb5e69c9a9c5ea3.img.jpg_600x330_bda46e68.jpg">
    <div class="banner-info">
      <div class="banner-title">大连圣亚海洋世界景区</div>
      <div class="banner-number"><span class="iconfont banner-icon">&#xe63b;</span>39</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .banner
    position :relative
    overflow :hidden
    height :0
    padding-bottom :55%
    .banner-img
      width :100%
    .banner-info
      display :flex
      position :absolute
      left :0
      right :0
      bottom :0
      line-height :.6rem
      color :#fff
      background-image :linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)) // 创建多种颜色线性渐变图片
      .banner-title
        flex :1 // equivalent to flex: 1 1 0% （flex-grow， flex-shrink, flex-basis）
        font-size : .32rem
        padding :0 .2rem
        // background :red
      .banner-number
        margin-top : .14rem
        padding :0 .4rem
        height :.32rem
        line-height :.32rem
        border-radius :.2rem
        background :rgba(0,0,0,0.8)
        font-size :.24rem
        .banner-icon
          font-size :.24rem
</style>
