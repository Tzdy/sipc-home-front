<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
  color: #AAAAAA;
}

input:-moz-placeholder, textarea:-moz-placeholder {
  color: #AAAAAA;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #AAAAAA;
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  color: #AAAAAA;
}
</style>
