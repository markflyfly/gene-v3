<template>
  <div :class="{ 'active': !flag, 'dragBox': true }" ref="dragBox" :style="`left: ${x}px; top: ${y}px`">
    <slot>
      <span class="search"></span>
    </slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        flag: false,
        x: 999, // 当前距离屏幕左侧位置
        y: 0, // 当前距离屏幕顶部位置
        cur: {
          x: 0, // 移动前x轴位置
          y: 0, // 移动前y轴位置
          dx: 0, // 移动开始时距离屏幕左侧位置
          dy: 0 // 移动开始时距离屏幕顶部位置
        }
      }
    },
    computed: {
      isMobile() {
        return this.$store.state.option.isMobile
      }
    },
    mounted() {
      const dragBox = this.$refs.dragBox
      this.initDarg(dragBox)
      this.end(dragBox)
      let time
      window.addEventListener('resize', () => {
        clearTimeout(time);
        time = setTimeout(this.end(dragBox), 33);
      }, false);
    },
    methods: {
      initDarg(dragBox) {
        if (this.isMobile) {
          dragBox.addEventListener("touchstart", event => {
            this.down(event, dragBox)
            dragBox.addEventListener("touchmove", event => {
              this.move(event)
              event.preventDefault()
            }, false)
            dragBox.addEventListener("touchend", () => {
              this.end(dragBox)
              dragBox.removeEventListener("touchmove", () => {
              }, false)
              dragBox.removeEventListener("touchend", () => {
              }, false)
            }, false)
          }, false)
        } else {
          dragBox.addEventListener("mousedown", event => {
            this.down(event, dragBox)
            dragBox.addEventListener("mousemove", event => {
              this.move(event)
            }, false)
            document.addEventListener("mousemove", event => {
              event.preventDefault()
            }, false)
            document.body.addEventListener("mouseup", () => {
              this.end(dragBox)
              dragBox.removeEventListener("mousemove", () => {
              }, false)
              document.removeEventListener("mousemove", () => {
              }, false)
              document.body.removeEventListener("mouseup", () => {
              }, false)
            }, false)
          }, false)
        }
      },
      down(event, dragBox) {
        this.flag = true
        let touch
        if (event.touches) {
          touch = event.touches[0]
        } else {
          touch = event
        }
        this.cur.x = touch.clientX
        this.cur.y = touch.clientY
        this.cur.dx = dragBox.offsetLeft
        this.cur.dy = dragBox.offsetTop
      },
      move(event) {
        if (this.flag) {
          let touch
          if (event.touches) {
            touch = event.touches[0]
          } else {
            touch = event
          }
          this.x = touch.clientX - this.cur.x + this.cur.dx
          this.y = touch.clientY - this.cur.y + this.cur.dy
        }
      },
      end(dragBox) { // 鼠标释放时候的函数
        this.flag = false
        setTimeout(() => { // 防止页面跳转后获取到的dragBox计算错误
          if (this.x + dragBox.clientWidth / 2 <= document.body.clientWidth / 2) {
            this.x = -dragBox.clientWidth / 3
          } else {
            this.x = document.body.clientWidth - dragBox.clientWidth * 2 / 3
          }
        }, 33)
        if (this.y <= 0) {
          this.y = 0
        }
        if (this.y >= document.body.clientHeight - dragBox.clientHeight) {
          this.y = document.body.clientHeight - dragBox.clientHeight
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~assets/scss/variables";
  @import "~assets/scss/mixins";

  .dragBox {
    align-items: center;
    background: $white;
    border-radius: 50%;
    @include box-shadow(0px, 0px, 20px)
    cursor: pointer;
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 99999;
    * {
      cursor: pointer;
      user-select: none;
      &:active {
        cursor: Move;
      }
    }
    &.active {
      @include transition(all .3s ease-out)
    }
  }

  .search {
    height: px2rem(80px);
    width: px2rem(80px);
    display: block;
    position: relative;
    &:before, &:after {
      content: '';
      display: block;
      position: absolute;
    }
    &:before {
      height: px2rem(40px);
      width: px2rem(40px);
      border-width: px2rem(6px);
      border-color: $black-light;
      border-style: solid;
      border-radius: 100%;
      -webkit-border-radius: 100%;
      -moz-border-radius: 100%;
      top: px2rem(12px);
      left: px2rem(12px);
    }
    &:after {
      height: px2rem(30px);
      width: px2rem(6px);
      background: $black-light;
      @include transform(rotate(-45deg));
      top: px2rem(38px);
      left: px2rem(50px);
    }
  }
</style>