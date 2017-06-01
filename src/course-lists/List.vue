<template>
<section class='mm-course-list' v-if='message'>
  <div>
    <img :src="message.cover_240x140" alt="">
    <dl>
      <dt style='WebkitBoxOrient:vertical' v-if='message.title'>{{message.title}}</dt>
      <dd>
        <span v-if='message.category'>{{message.category}} | {{message.buy_count}}人已学习</span>
        <span v-if='message.score'>
        评分
          <em>{{message.score.toFixed(1)}}</em>
        </span>
        <span v-else>评分暂无</span>
      </dd>
    </dl>
  </div>
</section>
</template>

<script>
export default {
  name: 'mm-course-list',
  props: ['message'],
}
</script>
