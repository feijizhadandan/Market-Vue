<template>
  <ContentCard>
    <div class="row">
      <div class="col-md-6" id="login-card">
        <h2 id="title">{{ tips }}</h2>
        <div class="mb-3">
          <label for="username" class="form-label">用户名</label>
          <input type="text" class="form-control" id="username" placeholder="请输入用户名" v-model="username" />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">密码</label>
          <input type="password" class="form-control" id="password" placeholder="请输入密码" v-model="password" />
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label">手机号码</label>
          <input type="number" class="form-control" id="phone" placeholder="手机号码" v-model="phone" />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">邮箱</label>
          <input type="email" class="form-control" id="email" placeholder="邮箱" v-model="email" />
        </div>
        <div class="form-group one-info" id="gender">
          <label>性别</label>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="gender" id="man" value="0" checked="true" v-model="sex" />
            <label class="form-check-label" for="man">男</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="gender" id="woman" value="1" v-model="sex" />
            <label class="form-check-label" for="woman">女</label>
          </div>
        </div>
        <div id="operation">
          <button type="submit" class="btn btn-primary" id="submit-button" @click="clickSubmit">注册</button>
        </div>
      </div>
    </div>
  </ContentCard>
</template>

<script setup>
import ContentCard from '@/components/ContentCard.vue';
import router from '@/router';
import { ref, inject } from 'vue';

// 注入全局 axios
const axios = inject('axios');

const tips = ref('Please Register, My Boy');
const username = ref('');
const password = ref('');
const phone = ref('');
const email = ref('');
const sex = ref('0');

function clickSubmit() {
  console.log(username.value);
  console.log(password.value);
  console.log(phone.value);
  console.log(email.value);
  console.log(sex.value);
  axios
    .post('/api/register', {
      username: username.value,
      password: password.value,
      phoneNumber: phone.value,
      email: email.value,
      sex: sex.value,
    })
    .then(res => {
      // 注册成功
      if (res.data.code === 200) {
        router.push('/login');
        alert('注册成功！请登录');
      }
      // 注册失败(可能是名字重复了)
      else {
        console.log(res.data);
        tips.value = res.data.msg;
      }
    });
}
</script>

<style scoped>
#title {
  text-align: center;
  position: relative;
  bottom: 40px;
  font-weight: bold;
}
#login-card {
  margin: 100px auto;
}
#operation {
  margin-top: 40px;
  display: flex;
  align-items: center;
}
#submit-button {
  margin: 0 auto;
}
</style>
