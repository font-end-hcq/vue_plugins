import SaveDialog from './SaveDialog.vue'
import './SaveDialog.scss'

if(MULTY){
    SaveDialog.install = Vue => Vue.component(SaveDialog.name, SaveDialog)
}
export default SaveDialog
