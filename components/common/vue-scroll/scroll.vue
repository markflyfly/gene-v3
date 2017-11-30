<template>
  <div ref="wrapper" class="list-wrapper">
    <div class="scroll-content">
      <slot>
        <ul ref="list" class="list-content">
          <li @click="clickItem($event,item)" class="list-item" v-for="item in data">{{item}}</li>
        </ul>
      </slot>
      <slot name="pullup"
            :pullUpLoad="pullUpLoad"
            :isPullUpLoad="isPullUpLoad">
        <div class="pullup-wrapper" v-if="pullUpLoad">
          <div class="before-trigger" v-if="!isPullUpLoad">
            <hr>
            <span>{{pullUpTxt}}</span>
            <hr>
          </div>
          <div class="after-trigger" v-else>
            <div class="mf-loading-container">
              <img src="~/assets/img/loading.gif">
            </div>
          </div>
        </div>
      </slot>
    </div>
    <slot name="pulldown"
          :pullDownRefresh="pullDownRefresh"
          :pullDownStyle="pullDownStyle"
          :beforePullDown="beforePullDown"
          :isPullingDown="isPullingDown"
          :bubbleY="bubbleY">
      <div ref="pulldown" class="pulldown-wrapper" :style="pullDownStyle" v-if="pullDownRefresh">
        <div class="before-trigger" v-if="beforePullDown">
          <bubble :y="bubbleY"></bubble>
        </div>
        <div class="after-trigger" v-else>
          <div v-if="isPullingDown" class="loading">
            <div class="mf-loading-container">
              <img src="~/assets/img/loading.gif">
            </div>
          </div>
          <div v-else><span>{{refreshTxt}}</span></div>
        </div>
      </div>
    </slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from '~/plugins/better-scroll'
  import Bubble from './bubble.vue'

  export default {
    name: 'vue-scroll',
    props: {
      data: {
        type: Array,
        default: function () {
          return []
        }
      },
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      listenScroll: {
        type: Boolean,
        default: false
      },
      listenBeforeScroll: {
        type: Boolean,
        default: false
      },
      direction: {
        type: String,
        default: 'vertical'
      },
      scrollbar: {
        type: null,
        default: false
      },
      pullDownRefresh: {
        type: null,
        default: false
      },
      pullUpLoad: {
        type: null,
        default: false
      },
      startY: {
        type: Number,
        default: 0
      },
      refreshDelay: {
        type: Number,
        default: 20
      },
      freeScroll: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        beforePullDown: true,
        isRebounding: false,
        isPullingDown: false,
        isPullUpLoad: false,
        pullUpDirty: true,
        pullDownStyle: '',
        bubbleY: 0
      }
    },
    computed: {
      pullUpTxt() {
        const moreTxt = this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.more || '加载更多'
        const noMoreTxt = this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.noMore || '我 是 有 底 线 的'
        return this.pullUpDirty ? moreTxt : noMoreTxt
      },
      refreshTxt() {
        return this.pullDownRefresh && this.pullDownRefresh.txt || '刷新成功'
      }
    },
    created() {
      this.pullDownInitTop = -90
    },
    mounted() {
      setTimeout(() => {
        this.initScroll()
      }, 20)
      this.$refs.wrapper.style.height = this.$refs.wrapper.clientHeight - document.getElementById('nav').clientHeight + 'px'
    },
    methods: {
      getRect(el) {
        if (el instanceof window.SVGElement) {
          // eslint-disable-next-line
          let rect = el.getBoundingClientRect()
          return {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
          }
        } else {
          return {
            top: el.offsetTop,
            left: el.offsetLeft,
            width: el.offsetWidth,
            height: el.offsetHeight
          }
        }
      },
      initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        if (this.$refs.list && (this.pullDownRefresh || this.pullUpLoad)) {
          this.$refs.list.style.minHeight = `${this.getRect(this.$refs.wrapper).height + 1}px`
        }
        // eslint-disable-next-line
        let options = {
          probeType: this.probeType,
          click: this.click,
          scrollY: this.freeScroll || this.direction === 'vertical',
          scrollX: this.freeScroll || this.direction === 'horizontal',
          scrollbar: this.scrollbar,
          pullDownRefresh: this.pullDownRefresh,
          pullUpLoad: this.pullUpLoad,
          startY: this.startY,
          freeScroll: this.freeScroll
        }
        this.scroll = new BScroll(this.$refs.wrapper, options)
        if (this.listenScroll) {
          this.scroll.on('scroll', (pos) => {
            this.$emit('scroll', pos)
          })
        }
        if (this.listenBeforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScrollStart')
          })
        }
        if (this.pullDownRefresh) {
          this._initPullDownRefresh()
        }
        if (this.pullUpLoad) {
          this._initPullUpLoad()
        }
      },
      disable() {
        this.scroll && this.scroll.disable()
      },
      enable() {
        this.scroll && this.scroll.enable()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      scrollTo() {
        // eslint-disable-next-line
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        // eslint-disable-next-line
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      },
      clickItem(e, item) {
        this.$emit('click', item)
      },
      destroy() {
        this.scroll.destroy()
      },
      forceUpdate(dirty) {
        if (this.pullDownRefresh && this.isPullingDown) {
          this.isPullingDown = false
          this._reboundPullDown().then(() => {
            this._afterPullDown()
          })
        } else if (this.pullUpLoad && this.isPullUpLoad) {
          this.isPullUpLoad = false
          this.scroll.finishPullUp()
          this.pullUpDirty = dirty
          this.refresh()
        } else {
          this.refresh()
        }
      },
      _initPullDownRefresh() {
        this.scroll.on('pullingDown', () => {
          this.beforePullDown = false
          this.isPullingDown = true
          this.$emit('pullingDown')
        })
        this.scroll.on('scroll', (pos) => {
          if (this.beforePullDown) {
            this.bubbleY = Math.max(0, pos.y + this.pullDownInitTop)
            this.pullDownStyle = `top:${Math.min(pos.y + this.pullDownInitTop, 10)}px`
          } else {
            this.bubbleY = 0
          }
          if (this.isRebounding) {
            this.pullDownStyle = `top:${10 - (this.pullDownRefresh.stop - pos.y)}px`
          }
        })
      },
      _initPullUpLoad() {
        this.scroll.on('pullingUp', () => {
          this.isPullUpLoad = true
          this.$emit('pullingUp')
        })
      },
      _reboundPullDown() {
        const {stopTime = 600} = this.pullDownRefresh
        return new Promise((resolve) => {
          setTimeout(() => {
            this.isRebounding = true
            this.scroll.finishPullDown()
            resolve()
          }, stopTime)
        })
      },
      _afterPullDown() {
        setTimeout(() => {
          this.pullDownStyle = `top:${this.pullDownInitTop}px`
          this.beforePullDown = true
          this.isRebounding = false
          this.refresh()
        }, this.scroll.options.bounceTime)
      }
    },
    watch: {
      data() {
        setTimeout(() => {
          this.forceUpdate(true)
        }, this.refreshDelay)
      }
    },
    components: {
      Bubble
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/variables";
  @import "~assets/scss/mixins";

  .list-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background: #fff;
    .scroll-content {
      position: relative;
      z-index: 1;
    }
    .list-content {
      position: relative;
      z-index: 10;
      background: #fff;
      .list-item {
        height: px2rem(120px);
        line-height: px2rem(120px);
        font-size: px2rem(28px);
        padding-left: px2rem(40px);
        border-bottom: px2rem(2px) solid #e5e5e5;
      }
    }
  }

  .pulldown-wrapper {
    position: absolute;
    width: 100%;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all;
    .after-trigger {
      margin-top: px2rem(20px);
    }
  }

  .pullup-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: px2rem(32px) 0;
  }

  .before-trigger, .after-trigger {
    color: $black-light;
  }

  .before-trigger {
    display: flex;
    justify-content: center;
    align-items: center;
    hr {
      width: px2rem(100px);
      border-top: px2rem(2px) $black-light solid;
      border-radius: px2rem(100px);
      margin-top: px2rem(3px);
      margin-left: px2rem(10px);
      margin-right: px2rem(10px);
    }
  }

  .mf-loading-container {
    img {
      width: px2rem(40px);
      height: px2rem(40px);
      display: block;
    }
  }


</style>