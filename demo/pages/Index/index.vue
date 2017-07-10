<template lang="html">
<div>
    <!-- <mm-top-back color='#fff' backcolor='blue' bgcolor='red'>首页</mm-top-back> -->

    <!-- <mm-main-menu></mm-main-menu> -->
      <!-- <mm-course-simple-tab :data='data'  pageCounts='10'/> -->
      <!-- <mm-course-simple-tab :message='data' /> -->

    <mm-course-tab :tags='tag'  pageCounts='10'/>

    <!-- <mm-course-list :message='message'></mm-course-list> -->
    <!-- <mm-course-list :message='message'></mm-course-list> -->
    <!-- <mm-save-dialog :time='9999' v-on:result='result'/> -->
    <!-- <mm-bottom-menu type='3'/> -->
    <!-- <mm-bottom-menu type='2'/> -->

    <!-- <a href="javascript:;" @click='rr'>111</a> -->
    <!-- <mm-rate-star starts='5' @update:use='e=>ss(e)'>课程评分</mm-rate-star> -->
    <!-- <mm-rate-star result='3'>课程评分</mm-rate-star> -->
    <!-- <mm-confirm-x v-on:next='aa' v-on:close='aa'
    :message='confirm.message'
    :closeText='"放弃支付"'
    :nextText='"重新支付"'
    :show='confirm.show'
    ></mm-confirm-x>
    <button type="button" name="button" @click='rr'>111</button> -->
</div>
</template>

<script>
export default {
  methods:{
    ss(e){console.log(e)},
    aa(){
        this.confirm = Object.assign({},this.confirm,{
          show:false
        })
    },
    result(){
      this.time = 0;
    },
    rr(){
      // this.time=5;
      this.confirm = Object.assign({},this.confirm,{
        show:true
      })
    }
  },
  data(){
    return{
        confirm:{
            show:false,
            message:'111',
        },
        time:0,
        message:{
          title:'203期 节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生',
          category:'营销影响',
          buy_count:100,
          score:10.0,
          cover_240x140:'',
          pingjia:{
              done:false,
          }
        },
        tag: JSON.parse(localStorage.tags||'{}'),
        data:[{},{}],
    }
  },
  watch(){

  }
}
</script>
