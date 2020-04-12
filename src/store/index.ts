import Vue from 'vue';
import Vuex from 'vuex';

import NavigationItem from '@/entities/NavigationItem';

Vue.use(Vuex);

export interface RootState {
  SearchOpen: boolean,
  MobileNavOpen: boolean,
  NavigationItems: NavigationItem[],
}

export const Modules = {

};

export default new Vuex.Store<RootState>({
  state: {
    SearchOpen: false,
    MobileNavOpen: false,
    NavigationItems: [
      {
        title: 'Home',
        linkUrl: '/',
        icon: 'mdi-home',
      },
      {
        title: 'Blog',
        linkUrl: '/blog',
        icon: 'mdi-post',
      },
      {
        title: 'About',
        linkUrl: '/about',
        icon: 'mdi-help',
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
