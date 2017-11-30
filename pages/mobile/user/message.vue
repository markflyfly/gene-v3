<template>
  <div class="message">

  </div>
</template>

<script>
  export default {
    async fetch({store, query}) {
      // return Promise.all([store.dispatch('getUserInfo')])
    },
    head() {
      return {
        title: '我的消息'
      }
    },
    data() {
      return {}
    },
    computed: {
      userInfo() {
        return this.$store.state.users
      }
    },
    mounted() {

    },
    components: {}
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/variables";
  @import "~assets/scss/mixins";

</style>