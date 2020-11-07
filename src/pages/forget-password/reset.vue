<template>
    <div id="reset">
        <div class="container">
            <h1>重置密码</h1>
            <diy-title>账号信息</diy-title>
            <box class="box" title="新密码">
                <input class="input" v-model="form.password" type="password">
            </box>
            <box class="box" title="重复新密码">
                <input class="input" v-model="rePassword" type="password">
            </box>
            <div class="operate">
                <diy-button @click="handleClick">重置</diy-button>
            </div>
        </div>
    </div>
</template>

<script>
import Box from '../../components/Box.vue';
import Title from '../../components/Title.vue';
import rules from '../../utils/rules/auth/info';
import { formValid } from '../../utils/valid';
import { resetPassword } from '../../api/user/index';

export default {
  data() {
    return {
      form: {
        password: '',
      },
      key: '',
      rePassword: '',
    };
  },
  methods: {
    async handleClick() {
      if (this.rePassword !== this.form.password) {
        this.$message.message('提示', '两次密码输入不一致，清重新输入');
        return;
      }
      const result = formValid(this.form, rules);
      if (!result.success) {
        this.$message.message('提示', result.message);
        return;
      }
      try {
        const req = await resetPassword({
          ...this.form,
          key: this.$route.query.key,
        });
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
#reset {
    width: 100%;
    height: 100%;
    display: flex;
}
#reset > .container {
    margin: auto;
    width: 3.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#reset > .container > .operate {
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
