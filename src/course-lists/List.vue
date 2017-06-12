<template>
<section class='mm-course-list' v-if='message'>
  <div>
    <img :src="message.cover_240x140" alt="">
    <dl>
      <dt style='WebkitBoxOrient:vertical' v-if='message.title'>{{message.title}}</dt>
      <dd>
        <span v-if='message.category'>{{message.category}} | {{message.buy_count}}人已学习</span>
        <object v-if='!message.scoreType'>
          <span v-if='message.score'>
          评分
            <em>{{message.score.toFixed(1)}}</em>
          </span>
          <span v-else>评分暂无</span>
        </object>
        <object v-if='message.scoreType' @click='next'>
            <label class='pingjia' v-if='message.scoreType === "pingjia"'>评价</label>
            <label v-else>已评价</label>
        </object>

      </dd>
    </dl>
  </div>
</section>
</template>

<script>
export default {
  name: 'mm-course-list',
  props: ['message'],
  methods:{
    next(){
      location.hash=this.message.next;
    }
  }
}
</script>
