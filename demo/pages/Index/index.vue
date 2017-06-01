<template lang="html">
<div>
    <mm-top-back color='#fff' backcolor='blue' bgcolor='red'>首页</mm-top-back>
    <!-- <mm-top-back color='#fff'>首页</mm-top-back> -->

    <!-- <mm-main-menu></mm-main-menu> -->
    <!-- <mm-course-tab :courses='courses'></mm-course-tab> -->
    <!-- <mm-course-list :message='message'></mm-course-list> -->
    <!-- <mm-course-list :message='message'></mm-course-list> -->
    <!-- <mm-bottom-menu></mm-bottom-menu> -->
</div>
</template>

<script>
export default {
  data(){
    return{
        message:{
          title:'203期 节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生',
          category:'营销影响',
          buy_count:100,
          score:10.0,
          cover_240x140:'',
        },
        courses:[{
          name:'全部课程',
          type:'1',
        },{
          name:'美食',
          type:'2',
        },{
          name:'电影',
          type:'3',
        },{
          name:'酒店',
          type:'4',
        },{
          name:'外卖',
          type:'5',
        }]
    }
  }
}
</script>
