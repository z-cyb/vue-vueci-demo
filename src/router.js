import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import  Dome from './views/Dome.vue'
import Weather from './views/Weather.vue'
import Base64 from './views/Base64'
import Json压缩 from './views/Json压缩'
import Student from './views/Student'

import Stuappend from './components/Stuappend'
import Studelete from './components/Studelete'
import Stumodifier from './components/Stumodifier'
import Stuselect from './components/Stuselect'
// import

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
      //示例
      {
          path: '/dome',
          name: 'dome',
          component: Dome
      },
      //天气预报
    {
      path:'/weather',
      name:'/weather',
      component:Weather
    },{
      path:'/base64',
      name:'/base64',
      component:Base64
    },{
      path:'/Json压缩',
      name:'/json压缩',
      component:Json压缩
    },{
      path:'/Student',
      name:'/student',
      component:Student
    },{
      path:'/Stuappend',
      name:'/stu_append',
      component:Stuappend
    },{
      path:'/Studelete',
      name:'/Studelete',
      component:Studelete
    },
    {
      path:'/Stumodifier',
      name:'/Stumodifier',
      component:Stumodifier
    },
    {
      path:'/Stuselect',
      name:'/Stuselect',
      component:Stuselect
    },
  ]
})
