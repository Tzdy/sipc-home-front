<template>
  <div id="title">
      <i class="dot"></i>
      <p class="text"><slot></slot></p>
      <i class="line"></i>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
#title {
    display: flex;
    width: 100%;
    height: 0.24rem;
    align-items: center;
}
#title > .dot {
    width: 0.08rem;
    height: 100%;
    margin-top: 0.05rem;
    background: rgb(36, 95, 165);
    flex-shrink: 0;
    align-self: end;
}
#title > .text {
    flex-shrink: 0;
    font-size: 0.18rem;
}
#title > .line {
    width: 100%;
    height: 2px;
    margin-top: 0.1rem;
    background: rgb(127, 167, 205);
}
</style>
