<template>
<dl id='my_bottom_menu' :style='{backgroundColor:background}' >
  <!-- <dd v-if='!type' v-for='(item,index) in list' :class='{on:$route.path===`${item.to}`||(item.to!==`/`&&$route.path.includes(item.to))}'
  @click='toOther(item.to,type===item.type||+type===index+1)'>
    <i :class='item.type'></i>
    <span>{{item.name}}</span>
  </dd> -->

  <dd v-for='(item,index) in list' :class='{on:+type===index+1}'
  @click='toOther(item.to,+type===index+1)'>
    <i :class='item.type'></i>
    <span>{{item.name}}</span>
  </dd>
</dl>
</template>

<script>
export default {
  name: 'mm-bottom-menu',
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
