<template>
  <footer ref="footer">
    <div class="footer">
      <nav class="nav" id="nav">
        <div class="item">
          <nuxt-link to="/mobile" class="link"><i class="icon-index"></i><p>首页</p></nuxt-link>
          <nuxt-link to="/mobile/find" class="link"><i class="icon-find"></i><p>发现</p></nuxt-link>
        </div>
        <div class="item">
          <nuxt-link class="link plus" to="/mobile/plus"><i class="icon-plus"></i></nuxt-link>
        </div>
        <div class="item">
          <nuxt-link to="/mobile/cart" class="link"><i class="icon-cart"></i><p>购物车</p></nuxt-link>
          <nuxt-link to="/mobile/user" class="link"><i class="icon-user"></i><p>我的</p></nuxt-link>
        </div>
      </nav>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'mobile-footer',
  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
  @import "~assets/scss/variables";
  @import "~assets/scss/mixins";
  footer {
    width: 100%;
    height: px2rem(140px);
    position: relative;
  }
  .footer{
    width: 100%;
    height: px2rem(140px);
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1001;
    display: flex;
    align-items: flex-end;
    .nav {
      width: 100%;
      height: px2rem(98px);
      padding: 0 px2rem(24px);
      background: $white;
      display: flex;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      @include box-shadow(0, px2rem(-2px), px2rem(30px), $box-shadow);
      .item {
        flex: 1;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: px2rem($font-size-small);
        .link {
          flex: 1;
          line-height: 1;
          color: $text;
          p {
            margin-top: px2rem(10px);
          }
        }
        .plus {
          display: inline-block;
          background: $white;
          width: px2rem(118px);
          height: px2rem(118px);
          border-radius: 50%;
          @include box-shadow(0, px2rem(-10px), px2rem(15px), $box-shadow);
          position: absolute;
          top: 0;
          .icon-plus {
            border-radius: 50%;
            margin-top: px2rem(15px);
            @include box-shadow(0, px2rem(10px), px2rem(15px), rgba(#5bffde, .35));
          }
        }
      }
    }
  }
  //The css code below is created by http://sjli.github.io/spritemaker_extjs/example.html

  /*-----The sprites----*/
  .icon-index,
  .icon-find,
  .icon-cart,
  .icon-user,
  .icon-plus {
    display: inline-block;
    *zoom: 1;
    vertical-align: middle;
    background: url(~/assets/img/common/footer.png) -9999px -9999px no-repeat;
    background-size: px2rem(292px) px2rem(88px);
  }

  .icon-index {
    width: px2rem(42px);
    height: px2rem(40px);
    background-position: 0 0;
  }

  .icon-find {
    width: px2rem(40px);
    height: px2rem(40px);
    background-position: px2rem(-52px) 0;
  }

  .icon-cart {
    width: px2rem(42px);
    height: px2rem(40px);
    background-position: px2rem(-102px) 0;
  }

  .icon-user {
    width: px2rem(40px);
    height: px2rem(42px);
    background-position: px2rem(-154px) 0;
  }

  .icon-plus {
    width: px2rem(88px);
    height: px2rem(88px);
    background-position: px2rem(-204px) 0;
  }
</style>