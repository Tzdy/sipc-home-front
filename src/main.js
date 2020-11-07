import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import App from './App.vue';
import router from './router/index';
import Button from './components/Button.vue';
import 'swiper/css/swiper.css';
import message from './plugins/message/index';
// 生产环境删除mockXhr
// import mockXhr from '../mock/index';

// mockXhr();

Vue.prototype.$message = message;
Vue.use(VueAwesomeSwiper /* { default options with global component } */);

Vue.config.productionTip = false;
Vue.component('diy-button', Button);
new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
