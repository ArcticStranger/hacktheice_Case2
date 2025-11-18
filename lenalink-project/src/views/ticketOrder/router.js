import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Frame from './views/frame'
import NotFound from './views/not-found'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Frame',
      path: '/',
      component: Frame,
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      fallback: true,
    },
  ],
})
