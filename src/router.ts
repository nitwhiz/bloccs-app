import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export default createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/HomeView.vue'),
    },
    {
      path: '/rooms/:roomId',
      name: 'room',
      component: () => import('./views/RoomView.vue'),
    },
  ] as RouteRecordRaw[],
});