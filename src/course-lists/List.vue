<template>
<section class='mm-course-list' v-if='message' @click='toNext'>
  <div>
    <img :src="message.cover_240x140" onerror="javascript:this.src='https://cdn.xueyuan.xiaobao100.com/shield/image/plugin-pic/default.png';" >
    <dl>
      <dt style='WebkitBoxOrient:vertical' v-if='message.title'>{{message.title}}</dt>
      <dd>
        <span v-if='message.category'>{{message.category}} | {{message.buy_count}}人已{{pingjia?"学习":"报名"}}</span>
        <object v-if='!pingjia'>
          <span v-if='message.score'>
          评分 {{message.score.toFixed(1)}}
          </span>
        </object>
        <object v-if='pingjia' @click='next'>
            <label class='pingjia' v-if='!pingjia.done'>评价</label>
            <span v-else>已评价</span>
        </object>
      </dd>
    </dl>
  </div>
</section>
</template>

<script>

export default {
  name: 'mm-course-list',
  props: ['message','to'],
  data(){
    return{
        pingjia:false,

    }
  },
  created(){
      const {pingjia} = this.message;
      this.pingjia = pingjia;

  },
  methods:{
    next(){
      location.hash=this.message.next;
    },
    toNext(){
      if(this.to){
        location.pathname = this.to;
      }
    }
  }
}
</script>
