import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
    //template: '<App/>',
    //components: { App },
    router,
    render: h => h(App),
}).$mount('#app')
