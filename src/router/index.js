import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Successfully from '@/components/successfully'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: '登录页',
            component: Login
        },
        {
            path: '/successfully',
            name: '成功页',
            component: Successfully
        }
    ]
})