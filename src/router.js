import Vue from 'vue'
import VueRouter from 'vue-router'

import formulario from './components/formulario/index.vue'
import respuestas from './components/respuestas.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect: '/binding' },
        { path: '/formulario', component: formulario },
        { path: '/respuestas', component: respuestas },
    ]
})

