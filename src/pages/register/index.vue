<template>
  <div id="register">
    <div class="title">创建账号</div>
    <div class="main">
      <form ref="form">
        <diy-title>账号信息</diy-title>
        <box class="box" title="用户名">
          <input type="text" v-model="form.username" />
        </box>
        <box class="box" title="密码">
          <input type="text" v-model="form.password" />
        </box>
        <box class="box" title="确认密码">
          <input type="text" v-model="repetPassword" />
        </box>
        <diy-title>身份信息</diy-title>
        <box class="box" title="姓名">
          <input type="text" v-model="form.name" />
        </box>
        <box class="box" title="性别">
          <input type="text" v-model="form.gender" />
        </box>
        <box class="box" title="学号">
          <input type="text" v-model="form.student_number" />
        </box>
        <box class="box" title="年级">
          <input type="text" v-model="form.grade" />
        </box>
        <box class="box" title="一卡通账号">
          <input type="text" v-model="form.card_id" />
        </box>
        <box class="box" title="手机号">
          <input type="text" v-model="form.phone" />
        </box>
        <box class="box" title="学院">
          <input type="text" v-model="form.college" />
        </box>
      </form>
    </div>
    <div class="operate">
      <diy-button @click="handleClick">创建</diy-button>
    </div>
  </div>
</template>

<script>
import { formValid } from '../../utils/valid';
import rules from './rules/register';
// import func from '../../../vue-temp/vue-editor-bridge';
import Box from '../../components/Box.vue';
// import Message from '../../components/Message.vue';
import Title from '../../components/Title.vue';

export default {
  name: 'register',
  data() {
    return {
      form: {
        username: '',
        password: '',
        name: '',
        gender: '',
        student_number: '',
        grade: '',
        card_id: '',
        phone: '',
        college: '',
      },
      repetPassword: '',
    };
  },
  methods: {
    handleClick() {
      const result = formValid(this.form, rules);
      if (!result.success) {
        this.$message.message('提示', result.message);
        return;
      }
      if (this.form.password !== this.repetPassword) {
        this.$message.message('提示', '两次密码输入不一致，清重新输入');
      }
    },
  },
  components: {
    Box,
    // Message,
    diyTitle: Title,
  },
  mounted() {
    window.form = this.$refs.form;
    this.$refs.form.oninvalid = function a(e) {
      console.log(e);
    };
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 0.4rem;
  margin-top: 0.2rem;
}
.box input {
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
#register {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
#register > .title {
  font-size: 0.25rem;
  font-weight: 400;
}
#register > .main {
  width: 3.2rem;
}
#register > .operate {
  margin-top: 0.2rem;
}
</style>
