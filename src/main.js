import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue' // add

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue) // add

Vue.config.productionTip = false
    
new Vue ({
    render: h => h(App),
}).$mount('#app')