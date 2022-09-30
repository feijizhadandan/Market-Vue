import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonalView from '../views/PersonalCenter/PersonalView.vue'
import FunctionView from '../views/Function/FunctionView.vue'
import FriendListView from '../views/Friend/FriendListView.vue'
import LoginView from '../views/Login/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import NotFoundView from '../views/NotFoundView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/personal',
    name: 'personal',
    component: PersonalView
  },
  {
    path: '/function',
    name: 'function',
    component: FunctionView
  },
  {
    path: '/friend',
    name: 'friend',
    component: FriendListView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    // 正则
    path: '/:path(.*)',
    name: '404',
    component: NotFoundView
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
