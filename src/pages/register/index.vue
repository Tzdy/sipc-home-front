<template>
  <div id="register">
    <div class="title">创建账号</div>
    <div class="main">
      <form ref="form">
        <diy-title>账号信息</diy-title>
        <box class="box" title="用户名">
          <input
            placeholder="例：21565811zhy"
            type="text"
            v-model="form.username"
          />
        </box>
        <box class="box" title="密码">
          <input
            placeholder="例：21565811zhy"
            type="password"
            v-model="form.password"
          />
        </box>
        <box class="box" title="确认密码">
          <input
            placeholder="例：21565811zhy"
            type="password"
            v-model="repetPassword"
          />
        </box>
        <diy-title>身份信息</diy-title>
        <box class="box" title="姓名">
          <input placeholder="例：张三" type="text" v-model="form.name" />
        </box>
        <box class="box" title="性别">
          <select :style="selectStyle" v-model="form.gender" name="" id="">
            <option selected disabled hidden value="">
              <span>例：男</span>
            </option>
            <option value="0">男</option>
            <option value="1">女</option>
          </select>
        </box>
        <box class="box" title="学号">
          <input
            placeholder="例：20185587"
            type="text"
            v-model="form.student_number"
          />
        </box>
        <box class="box" title="年级">
          <input
            placeholder="例：18级本科生"
            type="text"
            v-model="form.grade"
          />
        </box>
        <box class="box" title="手机号">
          <input
            placeholder="例：13212001111"
            type="text"
            v-model="form.phone"
          />
        </box>
        <box class="box" title="学院">
          <input
            placeholder="例：计算机科学与工程学院"
            type="text"
            v-model="form.college"
          />
        </box>
        <box class="box" title="邮箱">
          <input type="text" v-model="form.email" />
        </box>
      </form>
    </div>
    <div class="operate">
      <diy-button @click="handleCancel">取消</diy-button>
      <diy-button @click="handleClick">创建</diy-button>
    </div>
  </div>
</template>

<script>
import { formValid } from '../../utils/valid';
import rules from '../../utils/rules/auth/info';
// import func from '../../../vue-temp/vue-editor-bridge';
import Box from '../../components/Box.vue';
// import Message from '../../components/Message.vue';
import Title from '../../components/Title.vue';
import { register } from '../../api/user/index';

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
        phone: '',
        college: '',
        email: '',
      },
      repetPassword: '',
    };
  },
  computed: {
    selectStyle() {
      if (this.form.gender.length === 0) {
        return { color: '#AAAAAA' };
      }
      return { color: 'black' };
    },
  },
  methods: {
    async handleClick() {
      const result = formValid(this.form, rules);
      if (!result.success) {
        this.$message.message('提示', result.message);
        return;
      }
      if (this.form.password !== this.repetPassword) {
        this.$message.message('提示', '两次密码输入不一致，清重新输入');
        return;
      }
      try {
        await register(this.form);
        this.$router.push({
          name: 'home',
        });
      } catch (err) {
        this.$message.message('提示', err.error.message);
      }
    },
    handleCancel() {
      this.$router.push({
        name: 'home',
      });
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
  font-size: 13px;
}
.box select {
  border: none;
  width: 100%;
  height: 100%;
  background: none;
  outline: none;
  font-size: 13px;
}
#register {
  display: flex;
  flex-direction: column;
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
  margin-top: 0.2rem;
  display: flex;
  width: 3.2rem;
  justify-content: space-around;
}
</style>
