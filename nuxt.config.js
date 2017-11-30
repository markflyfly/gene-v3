module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  // css: ['~/assets/css/main.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}


/*---------- START ----------*/
/********** DO NOT MODIFY **********/
/**
 * 将值插入数组中
 * @param path // module.exports下的路径
 * @param value // 需要push到数组的值或者对象
 */
function pushArr(path, value) {
  var pathArr = path.split('.'),
    len = pathArr.length,
    str = 'module.exports';
  for (var i = 0; i < len; i++ ) {
    str += '.'+pathArr[i];
    if(eval(str) == undefined){
      eval(str + '= {}')
      if(i == len-1) {
        eval(str + '= []')
      }
    }
  }
  eval(str).push(value)
}

/**
 * 将值插入map对象中
 * @param path // module.exports下的路径
 * @param key // 键值对的名称 如果不需要可不填 value的值将直接赋给path 此时value的值类型必须为 boolean String Number
 * @param value // 键值对的值
 */
function pushMap(path, key, value) {
  var pathMap = path.split('.'),
    len = pathMap.length,
    str = 'module.exports';
  for (var i = 0; i < len; i++ ) {
    str += '.'+pathMap[i];
    if(eval(str) == undefined){
      eval(str + '= {}')
    }
  }
  if(key) {
    eval(str)[key] = value
  } else {
    eval(str + '=' + value)
  }
}
// 为JS和Vue文件定制babel配置。https://nuxtjs.org/api/configuration-build/#analyze
pushMap('build.babel', 'presets', ['es2015', 'stage-2'])
pushMap('build.babel', 'plugins', ['transform-async-to-generator', 'transform-runtime'])
pushMap('build.babel', 'comments', true)

// 打包公共模块添加
pushArr('build.vendor', 'swiper')
pushArr('build.vendor', 'qs')

// 插入css自动补全
pushArr('build.postcss', require('postcss-nested')())
pushArr('build.postcss', require('postcss-responsive-type')())
pushArr('build.postcss', require('postcss-hexrgba')())
pushArr('build.postcss', require('autoprefixer')({browsers: ['last 3 versions']}))

// 设置缓存组件数量及时间
pushMap('cache', 'max', 10)
pushMap('cache', 'maxAge', 1000 * 60 * 10)

// 设置全局css
pushArr('css', { src: '~/assets/scss/app.scss', lang: 'scss' })

// 设置开发环境判断值
pushMap('dev', '', (process.env.NODE_ENV !== 'production'))

// 设置生产环境变量
pushMap('env', 'baseUrl', `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`)

// 开启离线应用
pushMap('offline', '', true)

// 添加插件
// 1.添加全局过滤器
pushArr('plugins', { src: '~/plugins/filters.js' })
// 2.添加google统计
pushArr('plugins', { src: '~/plugins/ga.js', ssr: false })
// 3.添加复制事件后插入版权声明
pushArr('plugins', { src: '~/plugins/copy-right.js', ssr: false })
// 4.添加百度seo自动push脚本
pushArr('plugins', { src: '~/plugins/baidu-seo-push.js', ssr: false })
// 5.添加开启离线应用
pushArr('plugins', { src: '~/plugins/offline.js', ssr: false })
// 6.添加swiper组件
pushArr('plugins', { src: '~/plugins/swiper.js', ssr: false })
// 添加路由中间件
pushArr('router.middleware', 'ssr-cookie')
/********** DO NOT MODIFY **********/
/*---------- END ----------*/

// 设置生产环境变量
pushMap('env', 'baseUrl', Object.is(process.env.NODE_ENV, 'production') ? 'http://www.genefamily.com.cn/' : 'http://dev.www.genefamily.com.cn/')
// 定义title
pushMap('head', 'title', '首页')
// 定义title 模板
pushMap('head', 'titleTemplate', '%s - 基因家园')
// 定义html标准及语言
pushMap('head.htmlAttrs', 'xmlns', 'http://www.w3.org/1999/xhtml')
pushMap('head.htmlAttrs', 'lang', 'zh')
// 定义meta
pushArr('head.meta', { charset: 'utf-8' })
pushArr('head.meta', { 'http-equiv': 'cleartype', content: 'on' })
pushArr('head.meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' })
pushArr('head.meta', { name: 'author', content: 'Gemini-90s@hotmail.com' })
pushArr('head.meta', { name: 'MobileOptimized', content: '320' })
pushArr('head.meta', { name: 'HandheldFriendly', content: 'True' })
pushArr('head.meta', { name: 'apple-mobile-web-app-capable', content: 'yes' })
pushArr('head.meta', { hid: 'keywords', name: 'keywords', content: '基因,基因家园, 酒胆' })
pushArr('head.meta', { hid: 'description', name: 'description', content: '基因家园官网 基因家园 酒胆' })
// 添加自定义文件
pushArr('head.link', { rel: 'author', type: 'text/plain', href: '/humans.txt' })
// 添加JavaScript文件
// pushArr('head.script', {type: 'text/javascript', src: '/hotcss.js'})
// 定义没有script提示
pushArr('head.noscript', { innerHTML: 'This website requires JavaScript.' })
// 加载进度条配置
pushMap('loading', 'color', '#3dd4ff')
pushMap('loading', 'height', '.06rem')
// 是否插入http2协议头部 和 开启预载
pushMap('render', 'http2', true)
pushMap('render', 'true', true)
// 路由设置
// 链接激活时使用的 CSS 类名
pushMap('router', 'linkActiveClass', 'link-active')
// 当链接被精确匹配的时候应该激活的 class
pushMap('router', 'linkExactActiveClass', 'exact-link-active')
pushMap('router', 'scrollBehavior', function (to, from, savedPosition) { return savedPosition || { x: 0, y: 0 } })
// 自定义路由配置
pushMap('router', 'extendRoutes',  function (routes) {})

pushArr('build.vendor', '~/plugins/better-scroll.js')
pushArr('build.vendor', '~/plugins/mescroll.js')
pushArr('plugins', { src: '~/plugins/vue-picker.js' })
pushArr('plugins', { src: '~/plugins/vue-city-picker.js' })
pushArr('plugins', { src: '~/plugins/vue-scroll.js' })
pushArr('plugins', { src: '~/plugins/vue-user-photo.js' })
