import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue' // add
import VueRouter from 'vue-router' //add
import routes from './routes'  //add

Vue.use(VueRouter);

const router = new VueRouter({
    mode:'history',
    routes
})

// import bootstrap, css file 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/main.css'


Vue.use(BootstrapVue) // add

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')