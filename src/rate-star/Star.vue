<template lang="html">
  <section class="mm-rate-star">
    <div class="mm-rate-star__star">
        <slot></slot>
        <i v-for='item in (+starts||5)' :class='{on:star>=item}' @click='rate(item)' v-if='(!result||item<=result)'></i>
        <span v-if='!star&&!this.result'>请打分</span>
        <span v-else>{{star}}分</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'mm-rate-star',
  data() {
    return {
      star: 0,
    }
  },
  props:['starts','result'],
  methods: {
    rate(star) {
      if(!this.result){
        this.star = star;
      }
    },
  },
  mounted(){
    this.star = this.result || 0;
  }
}
</script>
