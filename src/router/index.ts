import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

/* PUBLIC */
const Machines = () => import('@/views/machines/MachinesView.vue');
const Settings = () => import('@/views/settings/SettingsView.vue');


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'machines',
    component: Machines
  },
  {
    path: '/:id/settings',
    name: 'settings',
    component: Settings,
    props: true
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
    else if (savedPosition) {
      return savedPosition;
    }
    else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
