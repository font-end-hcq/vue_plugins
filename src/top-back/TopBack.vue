<template lang="html">
  <div class="mm-top-back" :style={backgroundColor:bgcolor,color:color}>
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
      <g>
        <polygon points="49.485,5.888 45.559,1.847 14.515,31.999 45.559,62.153 49.485,58.111 22.605,31.999 	" :fill='backC'/>
      </g>
    </svg>
    <slot></slot>
    <a href="javascript:;" @click='back'></a>
  </div>
</template>

<script>
export default {
  name: 'mm-top-back',
  props:['color','bgcolor','backcolor'],
  data(){
      return {
        backC:'',
      }
  },
  mounted(){
    this.backC = this.backcolor||this.color;
  },
  methods:{
    back(){
      history.go(-1);
    }
  }
}
</script>
