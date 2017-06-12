import CourseSimpleTab from './CourseSimpleTab.vue'
import './CourseSimpleTab.scss'
if(MULTY){
    CourseSimpleTab.install = Vue => Vue.component(CourseSimpleTab.name, CourseSimpleTab)
}
export default CourseSimpleTab
