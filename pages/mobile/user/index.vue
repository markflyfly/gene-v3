<template>
  <div class="user">
    <header class="pubilc-box">
      <div class="avtar">
        <vue-user-photo class="headImg" :width="110" :src="userInfo.headImg" :name="userInfo.name"></vue-user-photo>
        <p>
          {{userInfo.name}}
          <i class="icon-link-bottom"></i>
        </p>
      </div>
      <div class="status">
        <span>
          <h1>{{userInfo.attention | currency}}</h1>
          <p>关注</p>
        </span>
        <span>
          <h1>{{userInfo.dynamic | currency}}</h1>
          <p>动态</p>
        </span>
        <span>
          <h1>{{userInfo.like | currency}}</h1>
          <p>喜欢</p>
        </span>
        <i class="icon-link-bottom"></i>
      </div>
      <div class="report">
        <i class="icon-gene"></i>
        <nuxt-link to="/">查看我的基因报告</nuxt-link>
        <i class="icon-arrowR"></i>
      </div>
    </header>
    <main class="pubilc-box">
      <ul>
        <nuxt-link to="user/info" class="icon-link-bottom">
          <i class="icon-lattice-1"></i><p>个人资料</p>
        </nuxt-link>
        <nuxt-link to="user/changePwd">
          <i class="icon-lattice-2"></i><p>修改密码</p>
        </nuxt-link>
        <nuxt-link to="user/sketch">
          <i class="icon-lattice-3"></i><p>我的草稿</p>
        </nuxt-link>
        <nuxt-link to="user/follow" class="icon-link-bottom">
          <i class="icon-lattice-4"></i><p>我关注的</p>
        </nuxt-link>
        <nuxt-link to="user/like">
          <i class="icon-lattice-5"></i><p>我喜欢的</p>
        </nuxt-link>
        <nuxt-link to="user/message">
          <i class="icon-lattice-6"></i><p>我的消息</p>
        </nuxt-link>
        <nuxt-link to="user/order" class="icon-link-right">
          <i class="icon-lattice-7"></i><p>我的订单</p>
        </nuxt-link>
        <nuxt-link to="user/integral" class="icon-link-right">
          <i class="icon-lattice-8"></i><p>我的积分</p>
        </nuxt-link>
        <nuxt-link to="user/coupons">
          <i class="icon-lattice-9"></i><p>优惠券</p>
        </nuxt-link>
      </ul>
    </main>
    <div class="login-status">
      <pbuilc-button>
        <span>退出登录</span>
      </pbuilc-button>
    </div>
  </div>
</template>
<script>
  import PbuilcButton from '~/components/mobile/button'

  export default {
    async fetch({store, query}) {
      return Promise.all([store.dispatch('getUserInfo')])
    },
    head() {
      return {
        title: '个人中心'
      }
    },
    data() {
      return {}
    },
    computed: {
      userInfo() {
        return this.$store.state.users.info
      }
    },
    mounted() {

    },
    components: {
      PbuilcButton
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/variables";
  @import "~assets/scss/mixins";

  .user {
    margin: px2rem(24px) px2rem(24px);
  }

  header {
    padding: px2rem(40px) px2rem(43px);
    .avtar {
      text-align: center;
      .headImg {
        margin: 0 auto;
      }
      p {
        font-size: px2rem($font-size-h1);
        line-height: 100%;
        position: relative;
        margin-top: px2rem(11px);
        display: inline-block;
        i {
          width: 100%;
          position: absolute;
          left: 0;
          right: 0;
          bottom: px2rem(-24px);
          &:before {
            width: 86%;
          }
        }
      }
    }
    .status {
      width: 100%;
      height: px2rem(158px);
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: px2rem(24px);
      position: relative;
      span {
        width: 100%;
        ddisplay: flex;
        justify-content: space-around;
        align-items: center;
        flex: 1;
        position: relative;
        z-index: 1;
        h1 {
          font-size: px2rem($font-size-h1);
        }
        p {
          font-size: px2rem($font-size-small);
        }
        &:before {
          content: '';
          width: px2rem(70px);
          height: px2rem(70px);
          position: absolute;
          top: px2rem(20px);
          left: px2rem(105px);
          background-color: $aide;
          z-index: -1;
        }
        &:nth-child(2):before {
          left: px2rem(94px);
        }
        &:nth-child(3):before {
          left: px2rem(80px);
        }
      }
      i {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
  }

  .report {
    width: 100%;
    height: px2rem(85px);
    line-height: px2rem(130px);
    a {
      font-size: px2rem($font-size-h1);
      color: $text;
      margin: 0 px2rem(12px);
      border-bottom: px2rem(2px) solid #808080;
    }
  }

  .icon-link-bottom {
    &:after {
      content: "";
      width: px2rem(6px);
      height: px2rem(2px);
      background-color: $auxiliary-line;
      position: absolute;
      left: 0;
      bottom: 0;
    }
    &:before {
      content: "";
      width: px2rem(602px);
      height: px2rem(2px);
      background-color: $auxiliary-line;
      position: absolute;
      left: px2rem(12px);
      bottom: 0;
    }
  }

  .icon-link-right {
    &:after {
      content: "";
      width: px2rem(2px);
      height: px2rem(6px);
      background-color: $auxiliary-line;
      position: absolute;
      right: 0;
      bottom: px2rem(44px);
    }
    &:before {
      content: "";
      width: px2rem(2px);
      height: px2rem(540px);
      background-color: $auxiliary-line;
      position: absolute;
      bottom: px2rem(56px);
      right: 0;
    }
  }

  .pubilc-box {
    width: 100%;
    margin: 0 auto px2rem(24px);
    text-align: center;
    background-color: $white;
    border-radius: px2rem(6px);
    @include box-shadow(px2rem(-2px), px2rem(8px), px2rem(20px), rgba($accent, .08))
  }

  main {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      a {
        width: 33.3333%;
        height: px2rem(212px);
        position: relative;
        i {
          margin-top: px2rem(60px);
        }
        p {
          margin-top: px2rem(24px);
        }
      }
      .icon-link-bottom:after {
        left: px2rem(44px);
      }
      .icon-link-bottom:before {
        left: px2rem(56px);
      }
    }
  }

  .login-status {
    width: 100%;
    height: px2rem(98px);
  }

  //The css code below is created by http://sjli.github.io/spritemaker_extjs/example.html

  /*-----The sprites----*/
  .icon-lattice-1,
  .icon-lattice-2,
  .icon-lattice-3,
  .icon-lattice-4,
  .icon-lattice-5,
  .icon-lattice-6,
  .icon-lattice-7,
  .icon-lattice-8,
  .icon-lattice-9,
  .icon-arrowR,
  .icon-gene, {
    display: inline-block;
    *zoom: 1;
    vertical-align: middle;
    background: url(~/assets/img/mobile/user.png) -9999px -9999px no-repeat;
    background-size: px2rem(616px) px2rem(48px);
  }

  .icon-lattice-1 {
    width: px2rem(60px);
    height: px2rem(39px);
    background-position: 0 0;
  }

  .icon-lattice-2 {
    width: px2rem(49px);
    height: px2rem(47px);
    background-position: px2rem(-70px) 0;
  }

  .icon-lattice-3 {
    width: px2rem(50px);
    height: px2rem(46px);
    background-position: px2rem(-129px) 0;
  }

  .icon-lattice-4 {
    width: px2rem(58px);
    height: px2rem(39px);
    background-position: px2rem(-189px) 0;
  }

  .icon-lattice-5 {
    width: px2rem(51px);
    height: px2rem(39px);
    background-position: px2rem(-257px) 0;
  }

  .icon-lattice-6 {
    width: px2rem(53px);
    height: px2rem(45px);
    background-position: px2rem(-318px) 0;
  }

  .icon-lattice-7 {
    width: px2rem(54px);
    height: px2rem(48px);
    background-position: px2rem(-381px) 0;
  }

  .icon-lattice-8 {
    width: px2rem(49px);
    height: px2rem(46px);
    background-position: px2rem(-445px) 0;
  }

  .icon-lattice-9 {
    width: px2rem(50px);
    height: px2rem(44px);
    background-position: px2rem(-504px) 0;
  }

  .icon-arrowR {
    width: px2rem(14px);
    height: px2rem(24px);
    background-position: px2rem(-602px) 0;
  }

  .icon-gene {
    width: px2rem(28px);
    height: px2rem(30px);
    background-position: px2rem(-564px) 0;
  }

</style>