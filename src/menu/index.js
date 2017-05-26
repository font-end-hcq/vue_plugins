import Menu from './Menu.vue'
import './menu.scss'
let install = Menu;
if(MULTY){
    install = Vue => Vue.component(Menu.name, Menu)
}
export default install
