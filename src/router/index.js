import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonalView from '../views/PersonalCenter/PersonalView.vue'
import FunctionView from '../views/Function/FunctionView.vue'
import FriendListView from '../views/Friend/FriendListView.vue'
import LoginView from '../views/Login/LoginView.vue'
import RegisterView from '../views/Register/RegisterView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import store from '@/store'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/personal',
    name: 'personal',
    component: PersonalView,
    meta: {
      requireLogin: true
    }
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

router.beforeEach((to) => {
  // console.log(!store.state.personalInfo.hasLogin);
  // 如果在一个需要登录才能访问的页面刷新，那么 store 中的 hasLogin 属性需要默认为已登录状态
  // 因为在该页面刷新时，先执行的是 router 中的守卫函数，同时 store 中的 hasLogin 会变为默认值，如果是 false，就会导致尽管是已登录状态，也会跳转到 Login 页面
  // 因为 token 的验证是在根组件的 onMounted 函数中进行验证的。因此可以先默认登录了，在验证登录时如果发现没登录，再跳转到登录页面。
  if(to.meta.requireLogin && !store.state.personalInfo.hasLogin) {
    alert("请先登录~")
    return { name: 'login' }  
  }
})

export default router
