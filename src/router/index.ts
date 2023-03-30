import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import PageLoader from '../components/PageLoader.vue'

library.add(fab)
library.add(faJs)


Vue.use(VueRouter)
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('page-loader', PageLoader);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/character/:id',
    name: 'character',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CharacterRoute.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
