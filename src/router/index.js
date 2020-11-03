import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('../pages/home/index.vue'),
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../pages/login/index.vue'),
  },
  {
    name: 'register',
    path: '/register',
    component: () => import('../pages/register/index.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
