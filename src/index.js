import MainMenu from './menu'
import CourseLists from './list'
import BottomMenu from './bottonMenu'

const install = Vue => {
  Vue.component(MainMenu.name, MainMenu);
  Vue.component(CourseLists.name, CourseLists);
  Vue.component(BottomMenu.name, BottomMenu);
}

export default install
