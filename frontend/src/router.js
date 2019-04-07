import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { name: 'home', path: '/home', component: () => import('./views/Home.vue')},
        { path: '*', redirect: '/home'},
    ]
});