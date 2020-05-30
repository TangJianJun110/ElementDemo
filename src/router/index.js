import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/shouye'
    },
    {
      path:'/',
      component:Home,
      children:[
        {
          path:'/shouye',
          component:()=>import('@/components/Shouye')
        },
        {
          path:'/baseform',
          component:()=>import('@/components/Form')
        }
      ]
    }
  ]
})
