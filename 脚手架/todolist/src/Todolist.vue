<template>
  <div>
    <div>
      <input type="text" v-model="inputValue">
      <button @click="handleSubmit">提交</button>
      <ul>

      </ul>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default{
    data () {
      return {
        inputValue: '',
        list: []
      }
    },
    methods: {
      handleSubmit (){
        // alert(123);
        this.list.push(this.inputValue)
        this.inputValue = ''
      }
    }
}
// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
