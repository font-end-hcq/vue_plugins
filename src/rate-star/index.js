import Star from './Star.vue'
import './Star.scss'
if(MULTY){
    Star.install = Vue => Vue.component(Star.name, Star)
}
export default Star
