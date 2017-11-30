<template>
  <div>
    <div class="button-box">
      <pbuilc-button>
        <span>退出登录</span>
      </pbuilc-button>
    </div>
  </div>
</template>
<script>
 import PbuilcButton from '~/components/mobile/button'


  export default {
    head() {
      return {
        title: 'Users'
      }
    },
    data() {
      return {

      }
    },
    mounted() {

    },
    methods: {

    },
    components: {
      PbuilcButton
    }
  }
</script>
<style lang="scss" scoped>
  @import "~assets/scss/variables";
  @import "~assets/scss/mixins";
  .demo-refresh-container {
    width: 256px;
    height: 300px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid #d9d9d9;
    position: relative;
    user-select: none;
  }
  .button-box{
    width: 100%;
    height: px2rem(100px);
    margin-top: 100px;
    span{
      font-size: px2rem($font-size-h1);
    }
  }
</style>