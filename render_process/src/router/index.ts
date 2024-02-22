import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TheHeader from '@/components/TheHeader/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: TheHeader,
    children: [
      {
        path: '/discoverMovie',
        name: 'discoverMovie',
        component: () => import('@/views/DiscoverMovie/index.vue')
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home/index.vue')
      },
      {
        path: '/player',
        name: 'player',
        component: () => import('@/views/Player/index.vue')
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
