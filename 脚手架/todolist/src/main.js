// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Todolist from './Todolist' // 当前目录下的App组件

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { Todolist },
  // components: { App: App },
  template: '<Todolist/>'
})
