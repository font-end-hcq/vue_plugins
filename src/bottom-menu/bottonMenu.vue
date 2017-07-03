<template>
<dl id='my_bottom_menu' :style='{backgroundColor:background}' >
  <dd v-for='(item,index) in list' :class='{on:+type===index+1}'
  @click='toOther(item.to,+type===index+1)'>
    <!-- <i :class='item.type'></i> -->
    <object v-if='+type===index+1'>
        <home-on v-if='item.type === "main"'/>
        <course-on v-if='item.type === "course"'/>
        <me-on v-if='item.type === "me"'/>
    </object>
    <object v-else>
        <home v-if='item.type === "main"'/>
        <course v-if='item.type === "course"'/>
        <me v-if='item.type === "me"'/>
    </object>
    <span>{{item.name}}</span>
  </dd>
</dl>
</template>

<script>

import Home from './svg/home.vue'
import HomeOn from './svg/home_on.vue'

import Course from './svg/course.vue'
import CourseOn from './svg/course_on.vue'

import Me from './svg/me.vue'
import MeOn from './svg/me_on.vue'

export default {
  name: 'mm-bottom-menu',
  components:{
      Home,
      HomeOn,
      Course,
      CourseOn,
      Me,
      MeOn
  },
  props: ['background',"type"],
  data() {
    return {
      list: [{
        name: '首页',
        type: 'main',
        to:'/',
      },
      {
        name:"全部课程",
        type:'course',
        to:'course',
      },
      {
        name: '我的',
        type: 'me',
        to: 'mime',
      }]
    }
  },
  methods:{
    toOther:function(to,run) {
      if(!run){
        location.href = to;
      }
      // console.log(to,run)
      // if(this.$route.path!==`/${to}`){
        //
      // }
    }
  }
}
</script>
