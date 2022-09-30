import { createApp } from 'vue'
import VueApp from './App.vue'
import router from './router'
import store from './store'

createApp(VueApp).use(store).use(router).mount('#app')
