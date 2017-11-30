<template>
  <div class="order">
    <div class="header">
      <a @click="state = ''" :class="{'active': state == ''}">全部订单</a>
      <a @click="state = 'UNPAID'" :class="{'active': state == 'UNPAID'}">待付款</a>
      <a @click="state = 'PAID'" :class="{'active': state == 'PAID'}">待收货</a>
      <i class="border" :style="`left: ${state == 'UNPAID' && 7.5 + 33.333 || state == 'PAID' && 7.5 + 66.666 || 7.5}%`"></i>
    </div>
    <ul class="order-list">
      <li class="item">
        <div class="title">
          <div class="seller">卖家名称</div>
          <div class="status">交易状态</div>
        </div>
        <div class="shops">
          <div class="shop">
            <div class="shop-img">
              <img src="//img.alicdn.com/bao/uploaded/i2/865899247/TB2Pg8Up4dkpuFjy0FbXXaNnpXa_!!865899247.jpg_200x200.jpg" />
            </div>
            <div class="shop-info">
              <h3 class="title">Macbook Pro 15 寸 2017</h3>
              <p class="sku">颜色分类:深空灰;尺寸:15</p>
              <ul class="order-serviceinfo">
                <li>七天退换</li>
                <li>顺丰包邮</li>
              </ul>
            </div>
            <div class="shop-pay">
              <p class="price">¥999.00</p>
              <p class="nums">x1</p>
            </div>
          </div>
        </div>
        <div class="pay">
          <span>共<b>1</b>件商品</span>
          <span>合计: <b>￥999.00</b></span>
          <span>(含运费<b>￥0.00</b>)</span>
        </div>
        <div class="orderop">
          <a>去付款</a>
          <a>删除订单</a>
          <a>查看物流</a>
          <a>评价</a>
        </div>
      </li>
    </ul>
    <div class="no-list">
      <div class="img"><img src="~/assets/img/mobile/no-list.png" /></div>
      <div class="title">您还没有相关的订单</div>
      <div class="content">可以去看看还有哪些想买的</div>
    </div>
  </div>
</template>

<script>
  export default {
    async fetch({store, query}) {
      // return Promise.all([store.dispatch('getUserInfo')])
    },
    head() {
      return {
        title: '我的订单'
      }
    },
    data() {
      return {
        state: ''
      }
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

  .header {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    line-height: 3;
    background: $white;
    @include box-shadow(0, 0, px2rem(5px), $disabled);
    position: relative;
    .border{
      content: '';
      width: 18.333%;
      border-bottom: px2rem(4px) solid $primary;
      position: absolute;
      bottom: 0;
      left: 7.5%;
      @include transition(left .2s linear);
    }
    a {
      flex: 1;
      text-align: center;
      @include transition(color .3s linear);
      &.active {
        color: $primary;
      }
    }
  }
  .order-list {
    margin: px2rem(32px) 0;
    .item {
      background: $white;
      .title {
        display: flex;
        justify-content: space-between;
        padding: px2rem(15px) px2rem(24px);
      }
      .shops {
        background: $dividers;
        .shop {
          display: flex;
          justify-content: space-between;
          padding: px2rem(20px) px2rem(24px);
          .shop-img {
            width: px2rem(120px);
            height: px2rem(120px);
            margin-right: px2rem(24px);
            img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .shop-info {
            flex: 1;
            .title {
              padding: 0;
              overflow: hidden;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              word-break: break-all;
            }
            .sku {
              color: $dodge;
              font-size: px2rem($font-size-small);
              margin-bottom: px2rem(20px);
            }
            .order-serviceinfo {
              display: flex;
              >li {
                margin-right: px2rem(10px);
                padding: 0 px2rem(10px);
                background: $primary;
                color: $white;
              }
            }
          }
          .shop-pay {
            width: px2rem(150px);
            text-align: right;
          }
        }

      }
      .pay {
        text-align: right;
        padding: px2rem(15px) px2rem(24px);
        border-bottom: px2rem(2px) solid $dividers;
      }
      .orderop {
        text-align: right;
        padding: px2rem(15px) px2rem(24px);
        a {
          display: inline-block;
          height: px2rem(60px);
          line-height: px2rem(60px);
          padding: 0 px2rem(20px);
          border: px2rem(2px) solid $dividers;
          margin-left: px2rem(10px);
          border-radius: px2rem(6px);
        }
      }
    }
  }
  .no-list {
    text-align: center;
    margin-top: px2rem(154px);
    .img {
      width: px2rem(120px);
      height: px2rem(120px);
      margin: 0 auto;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .title {
      margin-top: px2rem(48px);
      font-size: px2rem($font-size-h1);
    }
    .content {
      margin-top: px2rem(24px);
      color: $dodge;
    }
  }
</style>