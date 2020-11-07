<template>
    <div id="forget-password">
        <div class="container">
            <h1>找回密码</h1>
            <diy-title>账号信息</diy-title>
            <box class="box" title="账号">
                <input class="input" v-model="form.username" type="text">
            </box>
            <box class="box" title="邮箱">
                <input class="input" v-model="form.email" type="text">
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
        username: '20185337ydy',
        email: '571219188@qq.com',
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
        this.$message.message('错误', err.error.message);
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
