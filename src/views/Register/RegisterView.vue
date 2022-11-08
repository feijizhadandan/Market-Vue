<template>
  <ContentCard>
    <div class="row">
      <div class="col-md-6" id="login-card">
        <h2 id="title">Please Register, My Boy</h2>
        <form>
          <div class="mb-3">
            <label for="username" class="form-label">用户名</label>
            <input type="text" class="form-control" id="username" placeholder="请输入用户名" />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">密码</label>
            <input type="password" class="form-control" id="password" placeholder="请输入密码" />
            <label for="password" class="form-label"></label>
            <input type="password" class="form-control" id="password" placeholder="请输入再次密码" />
          </div>
          <div class="mb-3">
            <label for="username" class="form-label">地址</label>
            <input type="text" class="form-control" id="username" placeholder="请输入地址" />
          </div>
          <div id="birthday-gender">
            <div class="form-row one-info">
              <span class="form-group col-md-4">
                <label for="birthday">生日</label>
                <input type="date" class="form-control" id="birthday" />
              </span>
            </div>
            <div class="form-group one-info" id="gender">
              <label>性别</label>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gender" id="man" value="man" :checked="isMan" />
                <label class="form-check-label" for="man">男</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gender" id="woman" value="woman" :checked="!isMan" />
                <label class="form-check-label" for="woman">女</label>
              </div>
            </div>
          </div>
          <div id="operation">
            <button type="submit" class="btn btn-primary" id="submit-button">注册</button>
          </div>
        </form>
      </div>
    </div>
  </ContentCard>
</template>

<script setup>
import ContentCard from '@/components/ContentCard.vue';
</script>

<style scoped>
#title {
  text-align: center;
  position: relative;
  bottom: 80px;
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
#birthday-gender {
  display: flex;
  justify-content: flex-start;
}
#gender {
  margin-left: 100px;
}
#submit-button {
  margin: 0 auto;
}
</style>
