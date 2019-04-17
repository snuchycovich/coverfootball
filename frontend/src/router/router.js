import Vue from 'vue'
import VueRouter from 'vue-router'
//import store from '../store'
import Home from '../views/Home'
//import Login from '../views/Login'


Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        //{ name: 'home', path: '/home', component: () => import('../views/Home.vue')},
        { name: 'home', path: '/home', component: Home},
        //{ name: 'login', path: '/login', component: Login },
        { path: '*', redirect: '/home'},
    ]
});

/*router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {

      if (store.getters['security/isAuthenticated']) {
          next()
      } else {
          next({
              path: '/login',
              query: { redirect: to.fullPath }
          })
      }
  } else {
      next()

  }
});*/