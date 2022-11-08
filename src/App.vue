<template>
  <NavBar />

  <!-- NavBar的路由展示区 -->
  <router-view />
</template>

<!-- 引入Bootstrap -->
<script setup>
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { onMounted } from 'vue';
import NavBar from './components/NavBar.vue';
import router from './router';
import store from './store';

// 刷新后用于验证用户登录状态
onMounted(() => {
  axios
    .post(
      '/api/check',
      {},
      {
        headers: {
          Authorization: store.state.personalInfo.token,
        },
      }
    )
    .then(res => {
      // 已登录
      if (res.data.code === 200) {
        // 修改已登录状态
        store.commit('changeLoginStatus', true);
      }
      // 登录状态已过期
      // 会导致一个情况：没登录状态下刷新都会跳转到主页面
      else {
        localStorage.removeItem('token');
        store.commit('changeLoginStatus', false);
        router.push('/');
      }
    });
  store.state.personalInfo.token;
});
</script>

<style></style>
