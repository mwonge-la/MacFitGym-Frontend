import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/components/LandingPage.vue'
import Login from '@/components/Login.vue'
import SignUp from '@/components/SignUp.vue'
import HomePage from '@/components/HomePage.vue'
import Profile from '@/components/Profile.vue'
import GymLocation from '@/components/GymLocation.vue'
import Bundles from '@/components/Bundles.vue'
import Admin from '@/components/Admin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: '/',
    name: 'landingpage',
    component: LandingPage,
    },

    {
    path: '/login',
    name: 'login',
    component: Login,
    },

    {
    path: '/signUp',
    name: 'signup',
    component: SignUp,
    },

    {
    path: '/homePage',
    name: 'homepage',
    component: HomePage,
    },

    {
    path: '/profile',
    name: 'profile',
    component: Profile,
    },

    {
    path: '/gymLocation',
    name: 'gymlocation',
    component: GymLocation,
    },

    {
    path: '/bundles',
    name: 'bundles',
    component: Bundles,
    },

    {
    path: '/admin',
    name: 'admin',
    component: Admin,
    },

    
    
   
  ],
})

export default router
