<template>
  <NavBar />

  <!-- NavBar的路由展示区 -->
  <router-view />
</template>

<!-- 引入Bootstrap -->
<script setup>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./components/NavBar.vue";
</script>

<style></style>
