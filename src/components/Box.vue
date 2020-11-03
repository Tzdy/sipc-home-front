<template>
  <div id="box">
      <span class="title">{{ title }}</span>
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'box',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
#box {
    padding: 0 0.1rem;
    border: 2px solid rgb(179, 179, 179);
    box-sizing: border-box;
    border-radius: 10px;
}
#box > .title {
    height: 0.2rem;
    text-align: center;
    line-height: 0.2rem;
    font-size: 0.14rem;
    position: absolute;
    margin-top: -0.12rem;
    margin-left: 8px;
    padding: 0 8px;
    background: white;
    z-index: 1;
}
</style>
