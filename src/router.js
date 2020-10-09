import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home'
import Services from './pages/Services'
import Ordering from './pages/Ordering'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    base:process.env.BASE_URL,
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/services',
            component:Services
        },
        {
            path:'/ordering',
            component:Ordering
        }
    ]
})