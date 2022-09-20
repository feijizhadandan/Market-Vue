<template>
  <NavBar />
  <router-view />
</template>

<!-- 引入Bootstrap -->
<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import NavBar from './components/NavBar.vue'

export default {
  name: 'VueApp',
  components: { NavBar },
}
</script>

<style></style>
