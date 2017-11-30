<template>
  <div class="like">
    <div class="like-list">
      <div class="item icon-border-bottom" v-for="item in like" :key="item.id">
        <div class="item-header">
          <nuxt-link class="headImg" :to="{ path: 'like', query: { id: item.id }}">
              <vue-user-photo :width="100" :src="item.img"></vue-user-photo>
          </nuxt-link>
          <nuxt-link class="userInfo" :to="{ path: 'like', query: { id: item.id }}">
              <h1 class="name">{{item.title}}</h1>
              <h4 class="des">{{item.subTitle}}</h4>
          </nuxt-link>
          <nuxt-link class="icon" :to="{ path: 'like', query: { id: item.desSrc }}"><i class="icon-arrow-r"></i></nuxt-link>
        </div>
        <nuxt-link class="item-footer" :to="{ paht: 'like', query: { id: item.desSrc }}">
          <article>{{item.des}}</article>
          <span class="time">{{item.time | hours24}}</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    async fetch({store, query}) {
      return Promise.all([store.dispatch('getLike')])
    },
    head() {
      return {
        title: '我喜欢的'
      }
    },
    computed: {
      like() {
        return this.$store.state.users.like
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~assets/scss/variables";
  @import "~assets/scss/mixins";

  .like {
    margin: px2rem(24px) px2rem(24px) 0;
    .like-list {
      width: 100%;
      margin: 0 auto;
      background-color: $white;
      border-radius: px2rem(6px);
      @include box-shadow(px2rem(0px), px2rem(-4px), px2rem(15px), rgba($accent, .1));
      .item {
        padding: px2rem(24px) 0;
        .item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          .headImg {
            display: inline-block;
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
            .des {
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
        .item-footer {
          display: inline-block;
          margin-left: px2rem(144px);
          width: px2rem(494px);
          article {
            font-size: px2rem($font-size-small);
            color: $dodge;
            position: relative;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            word-break: break-all;
            line-height: 1.5;
          }
          .time {
            font-size: px2rem($font-size-marking);
            color: $disabled;
            display: block;
            margin-top: px2rem(22px);
          }
        }
      }
    }
  }

</style>