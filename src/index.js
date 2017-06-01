import MainMenu from './main-menu'
import CourseLists from './course-lists'
import BottomMenu from './bottom-menu'
import CourseTab from './course-tab'
import TopBack from './top-back'



const install = Vue => {
  Vue.component(MainMenu.name, MainMenu);
  Vue.component(CourseLists.name, CourseLists);
  Vue.component(BottomMenu.name, BottomMenu);
  Vue.component(CourseTab.name, CourseTab);
  Vue.component(TopBack.name, TopBack);
}

export default install
