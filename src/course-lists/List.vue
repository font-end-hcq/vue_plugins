<template>
<section class='mm-course-list' v-if='message'>
  <a href="javascript:;"  @click='toNext'></a>
  <div :class='{over:!message.status}'>
    <img :src="message.cover_240x140" onerror="javascript:this.src='https://cdn.xueyuan.xiaobao100.com/shield/image/plugin-pic/default.png';" >
    <dl>
      <dt style='WebkitBoxOrient:vertical' v-if='message.title'>{{message.title}}</dt>
      <dd>
        <span>{{message.category}}</span>
        <!-- <object v-if='!pingjia'>
          <span v-if='message.score'>
          评分 {{message.score.toFixed(1)}}
          </span>
        </object>
        <object v-if='pingjia&&message.status'>
          <label @click='next' class='pingjia' v-if='!message.pingjia'>评价</label>
          <span v-else>已评价</span>
        </object> -->
      </dd>
    </dl>
  </div>

  <object v-if='!pingjia'>
    <span v-if='message.score'>
    评分 {{message.score.toFixed(1)}}
    </span>
  </object>
  <object v-if='pingjia&&message.status'>
    <label @click='next' class='pingjia' v-if='!message.pingjia'>评价</label>
    <span v-else>已评价</span>
  </object>
</section>
</template>

<script>
export default {
  name: 'mm-course-list',
  props: ['message','to','pingjia'],
  methods:{
    next(){
        location.hash = `#/buy/${this.message.order_id}`;
    },
    toNext(){
      if(this.to){
        location.href =`${location.origin}/${this.to}`;
      }
    }
  }
}
</script>
