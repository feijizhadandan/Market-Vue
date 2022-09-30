<template>
  <ContentCard>
    <div class="row">
      <div class="col-md-6" id="login-card">
        <h2 id="title">Please Login, My Boy</h2>
        <form>
          <div class="mb-3">
            <label for="username" class="form-label">账号</label>
            <input type="text" class="form-control" id="username" placeholder="请输入用户账号" />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">密码</label>
            <input type="password" class="form-control" id="password" placeholder="请输入用户密码" />
          </div>
          <div id="operation">
            <button type="submit" class="btn btn-primary" style="margin: 0 auto">Submit</button>
            <router-link class="btn-link" :to="{ name: 'register' }">注册</router-link>
          </div>
        </form>
      </div>
    </div>
  </ContentCard>
</template>

<script setup>
import ContentCard from '@/components/ContentCard.vue';

// 跳转注册
</script>

<style scoped>
#title {
  text-align: center;
  position: relative;
  bottom: 80px;
  font-weight: bold;
}
#login-card {
  margin: 200px auto;
}

#operation {
  margin-top: 40px;
  display: flex;
  align-items: center;
}
</style>
