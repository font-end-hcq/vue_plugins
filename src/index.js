import MainMenu from './menu'
import CourseLists from './list'
import BottomMenu from './bottonMenu'

const install = Vue => {
  Vue.component('mm-main-menu', MainMenu);
  Vue.component('mm-course-list', CourseLists);
  Vue.component('mm-bottom-menu', BottomMenu);
}

export default install



// export {
//     MainMenu,
//     CourseLists,
//     BottomMenu,
// }
