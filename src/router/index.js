import Vue from 'vue'
import Router from 'vue-router'
import InformationPage from '@/components/pages/InformationPage'
import SignUpPage from '@/components/pages/SignUpPage'
import ProfilePage from '@/components/pages/ProfilePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/information-page',
      name: 'InformationPage',
      component: InformationPage
    },
    {
      path: '/sign-up-page',
      name: 'SignUpPage',
      component: SignUpPage
    },
    {
      path: '/profile-page',
      name: 'ProfilePage',
      component: ProfilePage
    },
    {
      path: '*',
      redirect: '/information-page'
    }
  ]
})
