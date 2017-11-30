<template>
  <div class="sketch">
    <div class="sketch-list">
      <nuxt-link  class="item icon-border-bottom"
                  v-for="item in sketch"
                  :key="item.id"
                  :to="{ path: 'sketch', query: { id: item.id }}">
        <div class="headImg">
          <vue-user-photo :width="100" :src="userInfo.headImg"></vue-user-photo>
        </div>
        <div class="userInfo">
          <h1 class="name">{{item.title}}</h1>
          <span class="time">{{item.time | hours24}} 编辑</span>
        </div>
        <div class="icon"><i class="icon-arrow-r"></i></div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
  export default {
    async fetch({store, query}) {
      return Promise.all([store.dispatch('getSketch')])
    },
    head() {
      return {
        title: '我的草稿'
      }
    },
    computed: {
      userInfo() {
        return this.$store.state.users.info
      },
      sketch() {
        return this.$store.state.users.sketch
      }
    },
  }
</script>
<style lang="scss" scoped>
  @import "~assets/scss/variables";
  @import "~assets/scss/mixins";

  .mescroll {
    position: fixed;
    top: 0px;
    bottom: px2rem(98px);
    height: auto;
    padding-bottom: .42rem;
    background: #fff;
  }
  .sketch {
    margin: px2rem(24px) px2rem(24px) 0;
    .sketch-list {
      width: 100%;
      margin: 0 auto;
      background-color: $white;
      border-radius: px2rem(6px);
      @include box-shadow(px2rem(0px), px2rem(-4px), px2rem(15px), rgba($accent, .1));
      .item {
        padding: px2rem(24px) 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .headImg {
          width: px2rem(144px);
        }
        .userInfo {
          width: px2rem(494px);
          line-height: 1.5;
          .name {
            font-size: px2rem($font-size-h1);
            color: $dodge;
            position: relative;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            word-break: break-all;
          }
          .time {
            font-size: px2rem($font-size-small);
            color: $disabled;
            line-height: 1.5;
          }
        }
        .icon {
          width: px2rem(62px);
          text-align: center;
        }
      }
    }
  }

</style>