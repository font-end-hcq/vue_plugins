<template>
  <section id='mm-save-dailog' v-if='seconds>0' :class='{show:(seconds<=time&&seconds>1)}'>
      <div class="result">
          <i></i>
          <span>{{msg||'保存成功'}}</span>
          <time>{{seconds.toFixed(0)}}秒</time>
      </div>
  </section>
</template>

<script>
export default {
  name: 'mm-save-dialog',
  data(){
    return{
        seconds:null,
        si:null,
    }
  },
  props:['time','msg'],
  methods:{
    act(emit=false){
      this.seconds=isNaN(this.time)?4:+this.time+1;
      this.si = setInterval(()=>{
        this.seconds-=0.2;
        if(this.seconds<0){
          if(emit){
            this.$emit('result');
          }
          clearInterval(this.si);
        }
      },200)
    }
  },
  created(){
    clearInterval(this.si);
  },
  mounted() {
    this.act();
  },
  watch:{
    time(val){
      if(val){
        this.act(val);
      }
    }
  }
}
</script>
