<template>
  <div class="coupons">

  </div>
</template>

<script>
  export default {
    async fetch({store, query}) {
      // return Promise.all([store.dispatch('getUserInfo')])
    },
    head() {
      return {
        title: '优惠券'
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