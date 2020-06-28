import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import store, { Types as StoreRootTypes, ErrorType } from '@/store';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/Index.vue'),
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
      {
        path: 'post/:pid',
        name: 'post',
        component: () => import('@/views/blog/Post.vue'),
        props: true,
      },
    ],
    props: true,
  },
  {
    path: '/*',
    name: 'unknown-page',
    component: () => import('@/views/404.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  store.state.ErrorType = ErrorType.NONE;
  store.state.IsLoading = true;

  if (to.params.blogName) {
    await store.dispatch(StoreRootTypes.actions.GET_BLOG_INFO, to.params.blogName);
  } else store.commit(StoreRootTypes.mutations.CLEAR_BLOG_INFO);

  next();
});

export default router;
