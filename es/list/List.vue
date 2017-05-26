<template>
<section id='mm-course-list' v-if='message'>
  <img src="" alt="">
  <dl>
    <dt v-if='message.title'>{{message.title}}</dt>
    <dd>
      <span v-if='message.theme'>{{message.theme}} | {{message.learned}}人已学习</span>
      <span v-if='message.rate'>
        评分
        <em>{{message.rate.toFixed(1)}}</em>
      </span>
    </dd>
  </dl>
</section>
</template>

<script>
export default {
  name: 'mm-course-list',
  props: ['message'],
}
</script>
