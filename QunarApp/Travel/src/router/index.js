import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld' // @是src目录
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
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
    }, {
      path: '/city',
      name: 'City',
      component: City
    }
    // , {
    //   path: '/list',
    //   name: 'List',
    //   component: List
    // }
  ]
})
