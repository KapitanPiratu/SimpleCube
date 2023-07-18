import { createRouter, createWebHashHistory } from 'vue-router'
import TimerView from '../views/TimerView.vue'

const routes = [
  {
    path: '/',
    name: 'timer',
    component: TimerView
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/StatisticsView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
