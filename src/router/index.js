import Vue from 'vue'
import Router from 'vue-router'
import Routes from '@/components/Routes'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Routes',
      component: Routes
    },
    {
      path: '/route-detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
