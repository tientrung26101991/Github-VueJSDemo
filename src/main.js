// import vue
import Vue from 'vue'
// import App component
import App from './App.vue'
// import bootstrap
import BootstrapVue from 'bootstrap-vue' // add
import VueRouter from 'vue-router' //add
// import Router
import routes from './routes'  //add

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
})

// import bootstrap, css file 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/main.css'


Vue.use(BootstrapVue) // add

// set the app in development mode
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')