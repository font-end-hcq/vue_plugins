import MainMenu from './main-menu'
import CourseLists from './course-lists'
import BottomMenu from './bottom-menu'
import CourseTab from './course-tab'
import CourseSimpleTab from './course-simple-tab'

import TopBack from './top-back'
import SaveDialog from './save-dialog'
import RateStar from './rate-star'
import Confirm from './confirm-x'

const install = Vue => {
  Vue.component(MainMenu.name, MainMenu);
  Vue.component(CourseLists.name, CourseLists);
  Vue.component(BottomMenu.name, BottomMenu);
  Vue.component(CourseTab.name, CourseTab);
  Vue.component(TopBack.name, TopBack);
  Vue.component(SaveDialog.name, SaveDialog);
  Vue.component(CourseSimpleTab.name, CourseSimpleTab);
  Vue.component(RateStar.name, RateStar);
  Vue.component(Confirm.name, Confirm);
}

export default install
