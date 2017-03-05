import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index'
import Msg from '../views/Msg'
import MsgIndex from 'components/Msg'
import Detail from 'components/Msg/Detail'
import Edit from 'components/Msg/Edit'

import Todo from '../views/Todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/msg',
      name: 'msg',
      component: Msg,
      children: [
        {
          path: '',
          component: MsgIndex
        },
        {
          path: 'add',
          component: Edit
        },
        {
          path: 'detail/:msgid',
          component: Detail
        },
        {
          path: 'modify/:msgid',
          component: Edit
        }
      ]
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
  ]
})
