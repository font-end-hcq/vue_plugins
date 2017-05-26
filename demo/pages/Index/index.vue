<template lang="html">
<div>
  <mm-main-menu></mm-main-menu>
    <mm-course-list :message='message'></mm-course-list>
    <mm-course-list :message='message'></mm-course-list>

    <mm-bottom-menu></mm-bottom-menu>
</div>
</template>

<script>
export default {
  data(){
    return{
        message:{
          title:'203期 节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生',
          theme:'营销影响',
          learned:100,
          rate:10.0,
          img:'',
        }
    }
  }
}
</script>

<style lang="css">
</style>
