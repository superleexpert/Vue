<template>
    <div class="header">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题</div>
      <div class="header-right">
        城市
        <span class="iconfont arrow-icon">&#xe600;</span>
        </div>
    </div>
</template>

<script>
export default{
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  // @import '../../../assets/styles/varibles.styl'
  // @import '~@/assets/styles/varibles.styl'
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: .86rem
    background: $bgColor
    color : #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align : center
        font-size : .4rem
    .header-input
      flex: 1
      line-height :.64rem
      height :.64rem
      margin-top :.12rem
      margin-bottom :.12rem
      background-color :#fff
      border-radius :.1rem
      color :#ccc
      padding-left :.2rem
    .header-right
      width: 1.24rem
      float: right
      text-align :center
      .arrow-icon
        font-size : .24rem
        margin-left : -.04rem
</style>
