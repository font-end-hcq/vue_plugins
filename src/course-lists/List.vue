<template>
<section class='mm-course-list' v-if='message'>
  <a href="javascript:;"  @click='toNext'></a>
  <div>
    <img :src="message.cover_240x140" onerror="javascript:this.src='https://cdn.xueyuan.xiaobao100.com/shield/image/plugin-pic/default.png';" >
    <dl>
      <dt style='WebkitBoxOrient:vertical' v-if='message.title'>{{message.title}}</dt>
      <dd>
        <span v-if='message.category'>{{message.category}}
           <!-- | {{message.buy_count||0}}人已{{pingjia?"学习":"报名"}} -->
         </span>
        <object v-if='!pingjia'>
          <span v-if='message.score'>
          评分 {{message.score.toFixed(1)}}
          </span>
        </object>
        <object v-if='pingjia'>
            <label @click='next' class='pingjia' v-if='!message.pingjia'>评价</label>
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
  props: ['message','to','pingjia'],
  methods:{
    next(){
        location.hash = `#/buy/${this.message._id}`;
    },
    toNext(){
      if(this.to){
        location.href =`${location.origin}/${this.to}`;
      }
    }
  }
}
</script>
