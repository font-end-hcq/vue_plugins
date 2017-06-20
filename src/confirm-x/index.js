import Confirm from './Confirm.vue'
import './confirm.scss'

if(MULTY){
    Confirm.install = Vue => Vue.component(Confirm.name, Confirm)
}
export default Confirm
