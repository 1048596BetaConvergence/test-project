import Vue from 'vue'
import Router from 'vue-router'
import InformationPage from '@/components/pages/InformationPage'
import SignUpPage from '@/components/pages/SignUpPage'
import ProfilePage from '@/components/pages/ProfilePage'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/information-page',
      name: 'InformationPage',
      component: InformationPage
    },
    {
      path: '/sign-up-page',
      name: 'SignUpPage',
      meta: {
        authenticated: true
      },
      component: SignUpPage
    },
    {
      path: '/profile-page',
      name: 'ProfilePage',
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
      component: ProfilePage
    },
    {
      path: '*',
      redirect: '/information-page'
    }
  ]
})

export default router
