import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'

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
    },
    {
      path:'/login',
      component:Login
    },
  ]
})
