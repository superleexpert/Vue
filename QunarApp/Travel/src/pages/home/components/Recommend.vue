<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link tag="li" class="item" v-for="(item, index) of list" :key="index" :to="'/detail/' + item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
  // data () {
  //   return {
  //     recommendList: [{
  //       id: '0001',
  //       imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_200x200_7690e4cd.jpg',
  //       title: '大连海洋世界啊啊啊',
  //       desc: '描述拍下哦擦破哦阿杜喵喵喵'
  //     }, {
  //       id: '0002',
  //       imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_200x200_7690e4cd.jpg',
  //       title: '大连海洋世界啊啊啊',
  //       desc: '描述拍下哦擦破哦阿杜喵喵喵'
  //     }, {
  //       id: '0003',
  //       imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_200x200_7690e4cd.jpg',
  //       title: '大连海洋世界啊啊啊',
  //       desc: '描述拍下哦擦破哦阿杜喵喵喵'
  //     }, {
  //       id: '0004',
  //       imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_200x200_7690e4cd.jpg',
  //       title: '大连海洋世界啊啊啊',
  //       desc: '描述拍下哦擦破哦阿杜喵喵喵'
  //     }]
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
  .title
    margin-top : .2rem
    line-height : .8rem
    background : #eee
    text-indent : .2rem
  .item
    display: flex
    overflow : hidden
    height : 1.9rem
    // background : red
    .item-img
      width: 1.7rem
      height : 1.7rem
      padding .1rem
    .item-info
      flex : 1
      padding : .1rem
      .item-title
        line-height : .54rem
        font-size : .32rem
      .item-desc
        line-height : .4rem
        color: #ccc
      .item-button
        line-height : .44rem
        margin-top : .2rem
        background :#ff9300
        padding : 0 .1rem
        border-radius : .06rem
        color : #fff
</style>
