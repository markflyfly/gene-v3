<template>
  <div id="app" v-cloak>
    <main id="app-main" :class="{ 'mobile': mobileLayout, [$route.name]: true }">
      <div id="main-content" class="main-content">
        <keep-alive>
          <nuxt></nuxt>
        </keep-alive>
      </div>
      <transition name="module">
        <keep-alive>
          <mobile-footer v-if="mobileLayout"></mobile-footer>
        </keep-alive>
      </transition>
    </main>
  </div>
</template>

<script>
  import MobileFooter from '~/components/mobile/footer.vue'

  export default {
    head() {
      return {
        script: [
          {type: 'text/javascript', src: '/js/hotcss.min.js', designWidth: this.mobileLayout ? '750' : '1920', id: 'hotjs'}
        ]
      }
    },
    computed: {
      mobileLayout() {
        return this.$store.state.option.isMobile || this.$store.state.option.pageType
      },
      toLogin() {
        return this.$store.state.option.toLogin
      }
    },
    mounted() {
      // 初始化执行一次 防止需要登录检测不到变化
      this.login();
    },
    watch: {
      toLogin() {
        this.login();
      }
    },
    methods: {
      login() {
        if (this.toLogin) {
          // 判断是否只在客户端执行
          if (process.browser) {
            this.$store.commit('option/SET_TO_LOGIN', false)
            setTimeout(function () { // 防止页面跳转过快而取不到正确的url
              location.href = `/user/login?redirect=${encodeURI(location.href)}`
            }, 0)
          }
        }
      }
    },
    components: {
      MobileFooter
    }
  }
</script>
