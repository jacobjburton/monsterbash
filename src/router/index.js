import Vue from 'vue'
import Router from 'vue-router'
import HereBeMonsters from '@/components/HereBeMonsters'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HereBeMonsters',
      component: HereBeMonsters
    }
  ]
})
