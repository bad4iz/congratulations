import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const routeNavigationDrawer = [
  {
    path: '/',
    to: '/',
    icon: 'dashboard',
    name: 'home',
    title: 'Домашняя',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home'),
  },
];

export const routeNavigationDrawerFooter = [
  {
    path: '/settings-app',
    to: '/settings-app',
    name: 'settingsApp',
    icon: 'build',
    title: 'Настройки приложения',
    component: () => import('@/views/SettingsApp'),
  },
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...routeNavigationDrawer, ...routeNavigationDrawerFooter],
});
