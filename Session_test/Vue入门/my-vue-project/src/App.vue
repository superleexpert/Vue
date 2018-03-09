<template>
  <div id="app">
    <h1 v-html="title">{{title}}</h1>
    <input v-model="newItem" v-on:keyup.enter="addNew">
    <ul>
      <li v-for="item in items" v-bind:class="{finished: item.isFinished}" v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
  import Store from './store'

  export default {
    data: function () {
      return {
        title: '<span>??</span> this is a todu list',
        // items: [
        //   // {
        //   //   label: 'coding',
        //   //   isFinished: false
        //   // },
        //   // {
        //   //   label: 'walking',
        //   //   isFinished: true
        //   // }
        // ],
        items: Store.fetch(),
        newItem: '',
        liClass: 'thisisLiClas'
      }
    },
    watch:{
      items: {
        handler: function (items) {
          Store.save(items)
        },
        deep: true
      }
    },
    methods: {
      toggleFinish: function (item) {
        item.isFinished = !item.isFinished
        // console.log(item)
      },
      addNew: function () {
        // console.log(this.newItem)
        this.items.push({
          label: this.newItem,
          isFinished: false
        })
        this.newItem = ''
      }
    }
  }
</script>

<style>
  .finished {
    text-decoration: underline;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

<!--<template>-->
  <!--<div id="app">-->
    <!--<img src="./assets/logo.png">-->
    <!--<HelloWorld/>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
<!--import HelloWorld from './components/HelloWorld'-->

<!--export default {-->
  <!--name: 'app',-->
  <!--components: {-->
    <!--HelloWorld-->
  <!--}-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--#app {-->
  <!--font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
  <!-- -webkit-font-smoothing: antialiased;A-->
  <!-- -moz-osx-font-smoothing: grayscale;-->
  <!--text-align: center;-->
  <!--color: #2c3e50;-->
  <!--margin-top: 60px;-->
<!--}-->
<!--</style>-->
