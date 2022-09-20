<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">VueWeb</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">首页</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">功能</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">好友</a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">登录</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">注册</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
// 将组件export出去
export default {
  name: 'NavBar',
}
</script>

<!-- scoped: 当前组件所写的css选择器不会影响到其他组件 -->
<style scoped></style>
