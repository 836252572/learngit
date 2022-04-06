//配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';

//使用插件
Vue.use(VueRouter);

import Home from '@/view/Home'
import Login from '@/view/Login'
import Register from '@/view/Register'
import Search from '@/view/Search'

// //重写push方法
// let originPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function (location, resolve, reject) {
//     if (resolve && reject) {
//         originPush.call(this, location, resolve, reject);
//     }
//     else {
//         console.log(this)
//         originPush.call(this, location, () => { }, () => { });
//     }
// }

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            meta: { isShowFooter: true }
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/search/:keywords?',
            name: 'search',
            component: Search,
            meta: { isShowFooter: true },
        },
        //重定向
        {
            path: '*',
            redirect: '/home',
            meta: { isShowFooter: true }
        },
    ]
})