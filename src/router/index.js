import Vue from 'vue'
import Router from 'vue-router'
import InformationPage from '@/components/pages/InformationPage'
import SignUpPage from '@/components/pages/SignUpPage'
import ProfilePage from '@/components/pages/ProfilePage'

Vue.use(Router)

<<<<<<< HEAD
const router = new Router({
=======
export default new Router({
>>>>>>> dc57ad0f1776b5cd8d3704caed4c4ce23c6aa953
  routes: [
    {
      path: '/information-page',
      name: 'InformationPage',
      component: InformationPage
    },
    {
      path: '/sign-up-page',
      name: 'SignUpPage',
<<<<<<< HEAD
      meta: {
        authenticated: true
      },
=======
>>>>>>> dc57ad0f1776b5cd8d3704caed4c4ce23c6aa953
      component: SignUpPage
    },
    {
      path: '/profile-page',
      name: 'ProfilePage',
<<<<<<< HEAD
      meta: {
        authenticated: true
      },
      beforeEnter: (to, from, next) => {
        if (from.meta.authenticated && window.localStorage.getItem('test-project')) {
          next()
        } else {
          next(false)
        }
      },
=======
>>>>>>> dc57ad0f1776b5cd8d3704caed4c4ce23c6aa953
      component: ProfilePage
    },
    {
      path: '*',
      redirect: '/information-page'
    }
  ]
})
<<<<<<< HEAD

export default router
=======
>>>>>>> dc57ad0f1776b5cd8d3704caed4c4ce23c6aa953
