import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import MainMenu from './views/mainmenu'
import Prototype00 from './views/prototype00'
import Register from './views/register'
import TicketOrderMain from './views/ticketOrderMain'
import TicketMonitoring from './views/ticketMonitoring/views/TicketMonitoring'
import NotFound from './views/not-found'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'MainMenu',
      path: '/',
      component: MainMenu,
    },
    {
      name: 'Prototype00',
      path: '/prototype',
      component: Prototype00,
    },
    {
      name: 'TicketOrderMain',
      path: '/ticket-order',
      component: TicketOrderMain,
    },
    {
      name: 'TicketMonitoring',
      path: '/ticket-monitoring',
      component: TicketMonitoring,
      meta: {
        title: 'Мониторинг билета - LenaLink',
        description: 'Отслеживание статуса и деталей вашего маршрута',
      },
    },
    {
      name: 'Register',
      path: '/register',
      component: Register,
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      fallback: true,
    },
  ],
})
