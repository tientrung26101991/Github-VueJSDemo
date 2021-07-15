import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue' // add
import VueRouter from 'vue-router' //add
import Home from './components/Home.vue'
import LoginForm from './components/LoginForm.vue' //add
Vue.use(VueRouter);
const routes = [
    { path: '/', component: Home },
    { path: '/login', component: LoginForm },
]
const router = new VueRouter({
    routes
})

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue) // add

Vue.config.productionTip = false

new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app')