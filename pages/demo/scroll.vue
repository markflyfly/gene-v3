<template>
  <scroll ref="scroll"
          :data="items"
          :scrollbar="scrollbarObj"
          :pullDownRefresh="pullDownRefreshObj"
          :pullUpLoad="pullUpLoadObj"
          :startY="parseInt(startY)"
          @pullingDown="onPullingDown"
          @pullingUp="onPullingUp">
  </scroll>
</template>

<script type="text/ecmascript-6">
  import Scroll from '~/components/common/vue-scroll/scroll'

  const ease = {
    // easeOutQuint
    swipe: {
      style: 'cubic-bezier(0.23, 1, 0.32, 1)',
      fn: (t) => {
        // eslint-disable-next-line
        return 1 + (--t * t * t * t * t)
      }
    },
    // easeOutQuard
    swipeBounce: {
      style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      fn: (t) => {
        return t * (2 - t)
      }
    },
    // easeOutQuart
    bounce: {
      style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      fn: (t) => {
        // eslint-disable-next-line
        return 1 - (--t * t * t * t)
      }
    }
  }
  export default {
    data() {
      return {
        scrollbar: true,  // 滚动条
        scrollbarFade: true,  // 滚动条的淡入淡出
        pullDownRefresh: true,  // 下拉刷新
        pullDownRefreshThreshold: 130, // 下拉的高度
        pullDownRefreshStop: 100,  // 下拉最低高度
        pullUpLoad: true, // 下拉刷新
        pullUpLoadThreshold: 20, // 上拉加载
        pullUpLoadMoreTxt: '加载更多',
        pullUpLoadNoMoreTxt: '我 是 有 底 线 的',
        startY: 0,  // Y轴初始值
        scrollToX: 0, // X轴初始值
        scrollToY: -200,  // Y轴最大拉伸
        scrollToTime: 700, // 动画时间
        scrollToEasing: 'bounce',
        scrollToEasingOptions: ['bounce', 'swipe', 'swipeBounce'],
        items: [],  // 业务数据
        itemIndex: 0
      }
    },
    created() {
      for (let i = 0; i < 10; i++) {
        this.items.push(++this.itemIndex)
      }
    },
    watch: {
      scrollbarObj: {
        handler() {
          this.rebuildScroll()
        },
        deep: true
      },
      pullDownRefreshObj: {
        handler() {
          this.rebuildScroll()
        },
        deep: true
      },
      pullUpLoadObj: {
        handler() {
          this.rebuildScroll()
        },
        deep: true
      },
      startY() {
        this.rebuildScroll()
      }
    },
    computed: {
      scrollbarObj: function () {
        return this.scrollbar ? {fade: this.scrollbarFade} : false
      },
      pullDownRefreshObj: function () {
        return this.pullDownRefresh ? {
          // eslint-disable-next-line
          threshold: parseInt(this.pullDownRefreshThreshold),
          // eslint-disable-next-line
          stop: parseInt(this.pullDownRefreshStop)
        } : false
      },
      pullUpLoadObj: function () {
        return this.pullUpLoad ? {
          // eslint-disable-next-line
          threshold: parseInt(this.pullUpLoadThreshold),
          txt: {more: this.pullUpLoadMoreTxt, noMore: this.pullUpLoadNoMoreTxt}
        } : false
      }
    },
    methods: {
      scrollTo() {  // 滚动到指定的位置
        this.$refs.scroll.scrollTo(this.scrollToX, this.scrollToY, this.scrollToTime, ease[this.scrollToEasing])
      },
      onPullingDown() {
        // 模拟更新数据
        console.log(this.$ref)
        console.log('pulling down and load data')
        setTimeout(() => {
          if (Math.random() > 0.5) {
            // 如果有新数据
            // eslint-disable-next-line
            this.items.unshift(new Date())
          } else {
            // 如果没有新数据
            this.$refs.scroll.forceUpdate()
          }
        }, 2000)
      },
      onPullingUp() { // 更新数据
        console.log('pulling up and load data')
        setTimeout(() => {
          if (Math.random() > 0.5) {
            // 如果有新数据
            // eslint-disable-next-line
            let newPage = []
            for (let i = 0; i < 10; i++) {
              newPage.push(++this.itemIndex)
            }
            this.items = this.items.concat(newPage)
          } else {
            // 如果没有新数据
            this.$refs.scroll.forceUpdate()
          }
        }, 1500)
      },
      rebuildScroll() {
        this.nextTick(() => {
          this.$refs.scroll.destroy()
          this.$refs.scroll.initScroll()
        })
      }
    },
    components: {
      Scroll
    },
  }
</script>