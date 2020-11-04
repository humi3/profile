import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Info from '../views/Info.vue'
import Work from '../views/Work.vue'
import Hobby from '../views/Hobby.vue'
import Etc from '../views/Etc.vue'
import Last from '../views/Last.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'info',
    component: Info
  },
  {
    path: '/work',
    name: 'work',
    component: Work
  }, {
    path: '/hobby',
    name: 'hobby',
    component: Hobby
  }, {
    path: '/etc',
    name: 'etc',
    component: Etc
  }, {
    path: '/last',
    name: 'last',
    component: Last
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
