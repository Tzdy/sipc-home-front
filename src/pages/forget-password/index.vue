<template>
  <div id="forget-password">
    <div class="container">
      <div class="title">找回密码</div>
      <diy-title>账号信息</diy-title>
      <box class="box" title="账号">
        <input
          placeholder="例：21565811zhy"
          class="input"
          v-model="form.username"
          type="text"
        />
      </box>
      <box class="box" title="邮箱">
        <input
          placeholder="例：561224668@qq.com"
          class="input"
          v-model="form.email"
          type="text"
        />
      </box>
      <box class="box" title="学号">
        <input placeholder="例：20185587" class="input" type="text" />
      </box>
      <box class="box" title="手机号">
        <input placeholder="例：13212001111" class="input" type="text" />
      </box>
      <div class="operate">
        <diy-button @click="handleClick">找回</diy-button>
      </div>
    </div>
  </div>
</template>

<script>
import Box from '../../components/Box.vue';
import Title from '../../components/Title.vue';
import rules from '../../utils/rules/auth/info';
import { formValid } from '../../utils/valid';
import { findBack } from '../../api/user/index';

export default {
  data() {
    return {
      form: {
        username: '',
        email: '',
      },
    };
  },
  methods: {
    async handleClick() {
      const result = formValid(this.form, rules);
      if (!result.success) {
        this.$message.message('提示', result.message);
        return;
      }
      try {
        const req = await findBack(this.form);
        this.$message.message('提示', req.message);
        this.$router.push({ name: 'home' });
      } catch (err) {
        this.$message.message('提示', err.error.message);
      }
    },
  },
  components: {
    Box,
    diyTitle: Title,
  },
};
</script>

<style scoped>
.title {
  font-size: 0.25rem;
  font-weight: 400;
  margin-bottom: 0.3rem;
}
#forget-password {
  width: 100%;
  height: 100%;
  display: flex;
}
#forget-password > .container {
  margin: auto;
  width: 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#forget-password > .container > .operate {
  margin-top: 0.4rem;
}
.box {
  width: 3.2rem;
  height: 0.4rem;
  margin-top: 0.2rem;
}
.input {
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
</style>
