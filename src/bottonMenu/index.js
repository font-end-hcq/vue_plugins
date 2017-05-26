import bottonMenu from './bottonMenu.vue'
import './bottonMenu.scss'
// const install = Vue =>Vue.component(bottonMenu.name, bottonMenu);

// export default bottonMenu

let install = bottonMenu;
if(MULTY){
    install = Vue => Vue.component(bottonMenu.name, bottonMenu)
}
export default install
