import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld' // @是src目录
import Home from '@/pages/home/Home'
// import List from '@/pages/list/List'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/', // 访问根路径
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

export default new Router({
  routes: [
    {
      path: '/', // 访问根路径
      name: 'Home',
      component: Home
    }
    // , {
    //   path: '/list',
    //   name: 'List',
    //   component: List
    // }
  ]
})
