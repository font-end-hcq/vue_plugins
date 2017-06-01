import Menu from './Menu.vue'
import './menu.scss'
if(MULTY){
    Menu.install = Vue => Vue.component(Menu.name, Menu)
}
export default Menu
