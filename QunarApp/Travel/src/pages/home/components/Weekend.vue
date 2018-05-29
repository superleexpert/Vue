<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item" v-for="(item, index) of recommendList" :key="index">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <!-- <button class="item-button">查看详情</button> -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
        title: '大连海洋世界啊啊啊',
        desc: '描述拍下哦擦破哦阿杜喵喵喵'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
        title: '大连海洋世界啊啊啊',
        desc: '描述拍下哦擦破哦阿杜喵喵喵'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_200x200_7690e4cd.jpg',
        title: '大连海洋世界啊啊啊',
        desc: '描述拍下哦擦破哦阿杜喵喵喵'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
        title: '大连海洋世界啊啊啊',
        desc: '描述拍下哦擦破哦阿杜喵喵喵'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .title
    margin-top : .2rem
    line-height : .8rem
    background : #eee
    text-indent : .2rem
  .item-img-wrapper
    overflow: hidden
    height :0
    padding-bottom : 33.9%
  // .item
    // display: flex
    // overflow : hidden
    // height : 1.9rem
  .item-img
    width: 100%
    // height : 1.7rem
    // padding .1rem
  .item-info
    padding : .1rem
    .item-title
      line-height : .54rem
      font-size : .32rem
    .item-desc
      line-height : .4rem
      color: #ccc
</style>
