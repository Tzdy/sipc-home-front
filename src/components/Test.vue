<template>
  <div>
      <input type="text" v-model="text">
      <div> {{ text}} </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    };
  },
};
</script>

<style>

</style>
