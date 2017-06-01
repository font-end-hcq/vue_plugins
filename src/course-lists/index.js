import List from './List.vue'
import './list.scss'

// let install = List;
if(MULTY){
    List.install = Vue => Vue.component(List.name, List)
}
export default List
