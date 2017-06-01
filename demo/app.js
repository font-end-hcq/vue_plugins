import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from './pages/Index'

// import {MainMenu,CourseLists,BottomMenu} from '../es'
// Vue.use(CourseLists)
// Vue.use(MainMenu)
// Vue.use(BottomMenu)

// import index,{MainMenu,CourseLists,BottomMenu,CourseTab} from '..'
import index from '..';

Vue.use(index)



const routes = [
    {
        path: '*',
        component: Index
    },
]


const router = new VueRouter({routes});

new Vue({router}).$mount('#container');
