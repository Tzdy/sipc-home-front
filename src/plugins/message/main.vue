<template>
  <div v-show="visible" @click="handleClick" id="message">
      <div class="message-box">
        <div class="title">{{ title }}</div>
        <div class="content">{{ text }}</div>
        <div class="operate" @click="handleClick">确定</div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      title: '',
      text: '',
    };
  },
  methods: {
    handleOpen(title, text) {
      this.visible = true;
      this.title = title;
      this.text = text;
    },
    handleClick() {
      this.visible = false;
      this.title = '';
      this.text = '';
    },
  },
};
</script>

<style scoped>
#message {
    z-index: 10000;
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
}
#message > .message-box {
    width: 3rem;
    min-height: 1.6rem;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 0.1rem;
}
#message > .message-box > .title {
    padding: 0.1rem;
}
#message > .message-box > .content {
    padding: 0.1rem;
}
#message > .message-box > .operate {
    color: rgb(64, 178, 242);
    text-align: center;
    border-top: 1px solid gray;
    width: 100%;
    box-sizing: border-box;
    padding: 4px;
}
</style>
