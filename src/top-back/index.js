import TopBack from './TopBack.vue'
import './TopBack.scss'
if(MULTY){
    TopBack.install = Vue => Vue.component(TopBack.name, TopBack)
}
export default TopBack
