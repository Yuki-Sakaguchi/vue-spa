import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Input from '@/components/Input'

Vue.use(Router)

// ルーティング設定
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/input',
      name: 'Input',
      component: Input
    }
  ]
})

// マウント前の処理
router.beforeEach((to, from, next) => {
  console.log('before')
  console.log(to)
  console.log(from)
  console.log(next)
  next()
})

// マウント後の処理
router.afterEach((to, from) => {
  console.log('after')
  console.log(to)
  console.log(from)
})

export default router
