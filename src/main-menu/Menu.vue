<template lang="html">
  <dl id='mm-main-menu'>
    <dd v-for='item in menus' @click='toUrl(item.url)'>
      <img :src="item.img" alt="">
      <span>{{item.name}}</span>
    </dd>
  </dl>
</template>

<script>
import mingshi from './img/mingshi.png';
import vip from './img/VIP.png';
import fenlei from './img/fenlei.png';
import kecheng from './img/kecheng.png';

export default {
  name:'mm-main-menu',
  data(){
    return{
      menus:[{
        type:'fenlei',
        name:'课程分类',
        img:fenlei,
        url:''
      },{
        type:'vip',
        name:'VIP课程',
        img:vip,
        url:''
      },{
        type:'mingshi',
        name:'名师推荐',
        img:mingshi,
        url:''
      },{
        type:'zhuanti',
        name:'课程专题',
        img:kecheng,
        url:''
      }]
    }
  },
  methods:{
      toUrl:function(to){
        location.hash = to;
      }
  }
}
</script>
