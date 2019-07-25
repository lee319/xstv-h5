// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/utils/utils'
import './static/reset.css'
import './static/scss/style.scss'
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib-vw/mand-mobile.css'
import axios from 'axios'
Vue.prototype.$axios = axios;
Vue.prototype.baseURL = process.env.BASE_API;

Vue.use(mandMobile)

// Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})