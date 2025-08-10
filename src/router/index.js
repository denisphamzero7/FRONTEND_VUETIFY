import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Project from '../views/Project.vue'
import Team from '../views/Team.vue'
import Home from '../views/Home.vue'
import Bai4 from '../views/bai4.vue'
import Bai5 from '../views/bai5.vue'
import Bai6 from '../views/bai6.vue'
import Bai7 from '../views/bai7.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/projects',
      name: 'projects',
      component: Project
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },{
      path:'/bai4',
      name:'bai4',
      component:Bai4
    },
    {
      path:'/bai5',
      name:'bai5',
      component:Bai5
    },{
      path:'/bai6',
      name:'bai6',
      component:Bai6
    },{
      path:'/bai7',
      name:'bai7',
      component:Bai7
    }

  ]
})