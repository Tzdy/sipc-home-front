<template>
  <div v-show="visible" id="message">
      <div class="message-box">
        <div class="title">{{ title }}</div>
        <div class="content">{{ text }}</div>
        <div class="operate" @click="handleClick">确定</div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit('update:visible', false);
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
    padding: 0.1rem;
    color: rgb(64, 178, 242);
    text-align: center;
    border-top: 1px solid gray;
    width: 100%;
}
</style>
