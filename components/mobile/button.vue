<template>
  <span class="button">
    <slot>This Is 按钮</slot>
  </span>
</template>
<script>
export default {
  name: 'pubilc-button'
}

</script>
<style lang="scss" scoped>
  @import "~assets/scss/variables";
  @import "~assets/scss/mixins";

  .button{
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: px2rem($font-size-h1);
    line-height: px2rem(32px);
    color: $green;
    border-radius: px2rem(500px);
    border: px2rem(2px) solid $green;
    // box-shadow: inset 0 px2rem(2px) px2rem(40px) rgba($green, .35),inset 0 px2rem(-4px) px2rem(120px) $white, 0 px2rem(4px) px2rem(40px) rgba($green, .35), 0 px2rem(-4px) px2rem(120px) $white;
    background-color: transparent;
  }
</style>