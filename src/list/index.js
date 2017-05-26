import List from './List.vue'
import './list.scss'

let install = List;
if(MULTY){
    install = Vue => Vue.component(List.name, List)
}
export default install
