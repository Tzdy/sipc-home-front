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
  {
    name: 'reset',
    path: '/reset',
    component: () => import('../pages/forget-password/reset.vue'),
  },
  {
    name: 'forget-password',
    path: '/forget-password',
    component: () => import('../pages/forget-password/index.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
