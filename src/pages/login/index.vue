<template>
  <div id="login">
    <div class="header">
      <div class="logo">
        <img width="100%" src="logo.png" alt="">
      </div>
      <div class="title">登陆账号</div>
    </div>
    <form>
      <box class="box" title="账号/手机号">
        <input
          v-model="form.username"
          class="input"
          placeholder="例：20186634xyc"
          type="text"
        />
      </box>
      <box class="box" title="密码">
        <input
          v-model="form.password"
          class="input"
          placeholder="例：20186634xyc"
          type="password"
        />
      </box>
      <div class="operate">
        <diy-button @click="handleLogin">登陆</diy-button>
        <diy-button @click="handleCancel">取消</diy-button>
      </div>
    </form>
  </div>
</template>

<script>
import Box from '../../components/Box.vue';
import { login } from '../../api/user/index';

export default {
  name: 'login',
  components: {
    Box,
  },
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async handleLogin() {
      try {
        await login(this.form);
        this.$router.push({
          name: 'home',
        });
      } catch (err) {
        if (err.error) {
          this.$message.message('提示', err.error.message);
        }
      }
    },
    handleCancel() {
      this.$router.push({
        name: 'home',
      });
    },
  },
};
</script>

<style scoped>
.box {
    width: 3.2rem;
    height: 0.4rem;
    margin-bottom: 0.4rem;
}
.box input{
    outline: none;
    border: none;
    width: 100%;
    font-size: 0.12rem;
    height: 100%;
    position: relative;
    z-index: 2;
    background: rgba(0, 0, 0, 0);
    display: block;
}
#login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
#login > .header {
  display: flex;
  flex-direction: column;
}
#login > .header > .title {
  font-weight: 400;
  font-size: 0.3rem;
}
#login > form {
  margin-top: 0.84rem;
}
#login > form > .operate {
  display: flex;
  justify-content: space-around;
  margin-top: 0.4rem;
}
</style>
