import Vue from 'vue'
import VueRouter from 'vue-router'
import Services from '../views/Services.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Services',
        component: Services
    },
    {
        path: '/about',
        name: 'About',

        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/contact',
        name: 'Contact',

        // route level code-splitting
        // this generates a separate chunk (contact.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "contact" */ '../views/Contact.vue'),
        props: {
            mailAddress: "sami.saadawi.pro@gmail.com"
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router