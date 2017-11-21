import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/top/HelloWorld'

import Content1 from '@/components/content1/top'
import SubTop from '@/components/content1/sub/top'
import Sub1 from '@/components/content1/sub/sub1'
import Sub2 from '@/components/content1/sub/sub2'

import Content2 from '@/components/content2/top'

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
      path: '/content1/',
      component: Content1,
      children: [
        {
          path: '/',
          component: SubTop
        },
        {
          path: 'sub1',
          component: Sub1
        },
        {
          path: 'sub2',
          component: Sub2
        }
      ]
    },
    {
      path: '/content2',
      name: 'Content2',
      component: Content2
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
