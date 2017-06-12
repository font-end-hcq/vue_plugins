import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from './pages/Index'

// import {MainMenu,CourseLists,BottomMenu} from '../es'
// Vue.use(CourseLists)
// Vue.use(MainMenu)
// Vue.use(BottomMenu)

import {MainMenu,CourseLists,BottomMenu,CourseTab,SaveDialog,CourseSimpleTab,RateStar} from '..'
// import index from '..';

// Vue.use(CourseSimpleTab)
// Vue.use(CourseLists)
Vue.use(CourseTab)
// Vue.use(RateStar)


const routes = [
    {
        path: '*',
        component: Index
    },
]


const router = new VueRouter({routes});

new Vue({router}).$mount('#container');
