<template lang="html">
<div>
    <!-- <mm-top-back color='#fff' backcolor='blue' bgcolor='red'>首页</mm-top-back> -->

    <!-- <mm-main-menu></mm-main-menu> -->
      <!-- <mm-course-simple-tab  pageCounts='10'/> -->
      <mm-course-tab :tags='tag'  pageCounts='10'/>

    <!-- <mm-course-list :message='message'></mm-course-list> -->
    <!-- <mm-course-list :message='message'></mm-course-list> -->
    <!-- <mm-save-dialog :time='time' v-on:result='result'/> -->
    <!-- <mm-bottom-menu type='2'/> -->
    <!-- <a href="javascript:;" @click='rr'>111</a> -->
    <!-- <mm-rate-star starts='5' >课程评分</mm-rate-star> -->
    <!-- <mm-rate-star result='3'>课程评分</mm-rate-star> -->
</div>
</template>

<script>
export default {
  methods:{
    result(){
      this.time = 0;
    },
    rr(){
      this.time=5;
    }
  },
  data(){
    return{
        time:0,
        message:{
          title:'203期 节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生',
          category:'营销影响',
          buy_count:100,
          score:10.0,
          cover_240x140:'',
        },
        tag: JSON.parse(localStorage.tags||'{}'),
    }
  },
  watch(){

  }
}
</script>
