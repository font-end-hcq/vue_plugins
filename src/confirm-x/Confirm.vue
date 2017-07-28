<template lang="html">
  <transition name="fade">
    <div class='mm-confirm-x' v-if="show">
        <dl>
        <dt>{{message}}</dt>
            <dd @click='close'>{{closeText||'取消'}}</dd>
            <dd @click='next'>{{nextText||'确定'}}</dd>
        </dl>
    </div>
  </transition>
</template>

<script>
export default {
    name: 'mm-confirm-x',
    props: ['message', 'closeText', 'nextText', 'show'],
    methods: {
        next() {
            this.$emit('next');
            this.on = false;
        },
        close() {
            this.$emit('close');
            this.on = false;
        }
    }
}
</script>
