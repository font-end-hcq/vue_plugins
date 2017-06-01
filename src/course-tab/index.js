import CourseTab from './CourseTab.vue'
import './CourseTab.scss'
if(MULTY){
    CourseTab.install = Vue => Vue.component(CourseTab.name, CourseTab)
}
export default CourseTab
