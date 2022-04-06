import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/view/Home/TypeNav'
import store from '@/store'

//全局组件
Vue.component(TypeNav.name, TypeNav);

import { reqCategoryList } from '@/api';
reqCategoryList();

import router from '@/router'
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
