<template>
  <div class="error">
    <img src="~/assets/img/error/error-bg.png"/>
    <div class="error-content">
      <h1 class="error-code">{{ error.statusCode }}</h1>
      <h2 class="error-message">海面雾气太大<br>受天气影响，找不到女朋友……<!--该页无法正常显示。--></h2>
      <!--<h2 class="error-message">{{ error.message }}</h2>-->
      <nuxt-link class="error-link" to="/">返回首页</nuxt-link>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['error']
  }
</script>

<style lang="scss" scoped>
  @import '~assets/scss/variables';
  @import '~assets/scss/mixins';
  .error {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-align: center;
    color: $text;
    img {
      margin-top: px2rem(100px);
      width: 100%;
    }
    .error-content {
      width: 100%;
      text-align: center;
      margin-top: px2rem(80px);;
      .error-code {
        font-size: px2rem(120px);
      }
      .error-message {
        color: $disabled;
        margin-top: px2rem(80px);
        font-size: px2rem(36px);
      }
      .error-link {
        display: block;
        margin-top: px2rem(80px);
        font-size:px2rem(36px);
        color: $primary;
      }
    }

  }
</style>
