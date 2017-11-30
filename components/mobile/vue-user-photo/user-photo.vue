<template>
  <div class="user-photo"
       ref="userPhoto"
       :class="{round: isRound}"
       :style="`${randomColor && 'background: '+ randomColor}; width: ${width / 100}rem; height: ${width / 100}rem;`">
    <img v-if="src" :src="src"/>
    <span class="user-head" :style="`font-size: ${fontSize}`" v-else>{{userName}}</span>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'vue-user-photo',
    props: {
      src: {
        // 头像路径
        type: String,
        default: ''
      },
      name: {
        // 头像路径
        type: String,
        default: '🍀'
      },
      width: {
        // 头像大小
        type: Number,
        default: 120
      },
      isRound: {
        // 是否为圆
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        fontSize: '0px'
      }
    },
    created() {

    },
    mounted() {
      // 计算字体大小
      this.fontSize = this.$refs.userPhoto.clientWidth * 0.5 + 'px'
    },
    computed: {
      userName() {
        // 因为Emoji图标为4个字节 字符串长度为2
        // eslint-disable-next-line
        let str = this.name.substring(0, 2);
        // 判断是否包含Emoji图标
        if(str.match(/\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]/g) != null) {
          return str
        } else {
          return this.name.substring(0, 1).toUpperCase();
        }
      },
      randomColor() {
        if(!this.src) {
          // 生成随机颜色
          return `hsla(${Math.floor(Math.random() * 360)}, 50%, 50%, 1)`
        }
        return ''
      }
    },
    methods: {},
    watch: {}
  }
</script>

<style lang='scss' scoped>
  @import "~assets/scss/variables";
  @import "~assets/scss/mixins";

  .user-photo {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    margin:  0 auto;
    &.round {
      border-radius: 50%;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
    .user-head {
      color: $white;
      @include transition(font-size .2s linear);
    }
  }
</style>