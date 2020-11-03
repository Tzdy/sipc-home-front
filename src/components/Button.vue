<template>
  <div @click="click" id="button">
    <span><slot></slot></span>
  </div>
</template>

<script>
export default {
  name: 'Button',
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
#button {
  display: inline-block;
  padding: 0 3vw;
  height: 0.3rem;
  background: rgb(59, 109, 188);
  border-radius: 1vh;
  color: white;
  font-size: 16px;
  line-height: 0.3rem;
  width: 20.6vw;
  text-align: center;
}
</style>
