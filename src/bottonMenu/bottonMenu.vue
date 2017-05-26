<template>
<dl id='my_bottom_menu' :style='{backgroundColor:background}' >
  <!-- <dd v-for='(item,index) in list' :class='type===item.type?"on":""'>-->
  <dd v-for='(item,index) in list' :class='{on:(type===item.type||+type===index+1),on:$route.path === `/${item.to}`}' @click='toOther(item.to,type===item.type||+type===index+1)'>
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
        to:'',
      },
      {
        name:"全部课程",
        type:'course',
        to:'course',
      },
      {
        name: '我的',
        type: 'me',
        to: 'me',
      }]
    }
  },
  methods:{
    toOther:function(to,run) {
      if(this.$route.path!==`/${to}`){
        location.hash = to;
      }
    }
  }
}
</script>
