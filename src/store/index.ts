import Vue from 'vue';
import Vuex from 'vuex';

import NavigationItem from '@/entities/NavigationItem';
import BlogResponseDto from '@/entities/dto/response/BlogResponseDto';
import BlogService from '@/services/api/blog-service';

Vue.use(Vuex);

export interface RootState {
  IsLoading: boolean,
  MobileNavOpen: boolean,
  NavigationItems: NavigationItem[],
  CurrentBlogName: string,
  CurrentBlog: BlogResponseDto | null,
}

export const Types = {
  getters: {
    NAVIGATION_ITEMS: 'NAVIGATION_ITEMS',
  },
  mutations: {
    SET_BLOG_INFO: 'SET_BLOG_INFO',
    SET_CURRENT_BLOG_NAME: 'SET_CURRENT_BLOG_NAME',
    CLEAR_BLOG_INFO: 'CLEAR_BLOG_INFO',
  },
  actions: {
    GET_BLOG_INFO: 'GET_BLOG_INFO',
  },
};

export const Modules = { };

export default new Vuex.Store<RootState>({
  state: {
    IsLoading: true,
    CurrentBlogName: '',
    CurrentBlog: null,
    MobileNavOpen: false,
    NavigationItems: [
      {
        title: 'Home',
        linkUrl: '/@:bname:',
        icon: 'mdi-home',
      },
      {
        title: 'About',
        linkUrl: '/@:bname:/about',
        icon: 'mdi-help',
      },
    ],
  },
  getters: {
    [Types.getters.NAVIGATION_ITEMS]: state => state.NavigationItems.map(x => ({
      title: x.title,
      icon: x.icon,
      linkUrl: x.linkUrl.replace(/:bname:/gm, state.CurrentBlogName),
    })),
  },
  mutations: {
    [Types.mutations.SET_BLOG_INFO]: (state, info?: BlogResponseDto) => {
      state.CurrentBlog = info || null;
    },
    [Types.mutations.SET_CURRENT_BLOG_NAME]: (state, blogName: string) => {
      state.CurrentBlogName = blogName;
    },
    [Types.mutations.CLEAR_BLOG_INFO]: (state) => {
      state.CurrentBlogName = '';
      state.CurrentBlog = null;
    },
  },
  actions: {
    [Types.actions.GET_BLOG_INFO]: async (context, blogName: string) => {
      const response = await BlogService.getByName(blogName);
      if (response) {
        context.commit(Types.mutations.SET_CURRENT_BLOG_NAME, blogName);
        context.commit(Types.mutations.SET_BLOG_INFO, response.data);
      }
    },
  },
  modules: {},
});
