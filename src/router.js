import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      //component: Home
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
        path: '/menu',
        name: 'menu',
        component: () => import('./views/Menu.vue')
    },
    {
        path: '/sign-in',
        name: 'signin',
        component: () => import('./views/Signin.vue')
    },
    {
        path: '/join',
        name: 'join',
        component: () => import('./views/Join.vue')
    },
    {
        path: '/boucher',
        name: 'boucher',
        component: () => import('./views/BoucherReport.vue')
    },
    {
        path: '/facebook',
        name: 'facebook',
        component: () => import('./views/FacebookReport.vue')
    },
    {
        path: '/google',
        name: 'google',
        component: () => import('./views/GoogleReport.vue')
    },
    {
        path: '/page2',
        name: 'page2',
        component: () => import('./views/Page2.vue')
    },
    {
        path: '/page3',
        name: 'page3',
        component: () => import('./views/Page3.vue')
    }
    ,
    {
        path: '/page4',
        name: 'page4',
        component: () => import('./views/Page4.vue')
    }
    

  ]//end  routes
})
