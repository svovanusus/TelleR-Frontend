import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/Index.vue'),
  },
  {
    path: '/login',
    name: 'auth',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/blog',
    name: 'blog-mockup',
    component: () => import('@/views/BlogMockup.vue'),
  },
  {
    path: '/post',
    name: 'post-mockup',
    component: () => import('@/views/PostMockup.vue'),
  },
  {
    path: '/blogs/:id',
    name: 'blog-info',
    component: () => import('@/views/BlogInfo.vue'),
    props: true,
  },
  {
    path: '/@:blogName',
    name: 'blog',
    component: () => import('@/views/BlogWrapper.vue'),
    children: [
      {
        path: '',
        name: 'blog-wrapper',
        component: () => import('@/views/blog/BlogHome.vue'),
      },
      {
        path: 'about',
        name: 'blog-about',
        component: () => import('@/views/blog/About.vue'),
      },
    ],
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
