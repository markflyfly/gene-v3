require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nuxt__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cookie_parser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api__ = __webpack_require__(5);




// import gc from 'idle-gc'


var app = __WEBPACK_IMPORTED_MODULE_1_express___default()();

app.use(__WEBPACK_IMPORTED_MODULE_2_body_parser___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_2_body_parser___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_3_cookie_parser___default()());

var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || 3000;

app.set('port', port);

// Import API Routes
app.use('/api', __WEBPACK_IMPORTED_MODULE_4__api__["a" /* default */]);

// Import and Set Nuxt.js options
var config = __webpack_require__(8);
config.dev = !("development" === 'production');

// Init Nuxt.js
var nuxt = new __WEBPACK_IMPORTED_MODULE_0_nuxt__["Nuxt"](config);

// Build only in dev mode
if (config.dev) {
  var builder = new __WEBPACK_IMPORTED_MODULE_0_nuxt__["Builder"](nuxt);
  builder.build();
}

// Give nuxt middleware to express
app.use(nuxt.render);

// Listen the server
app.listen(port, host);

// The first GC run starts 15 minutes after the last activity
// gc.start(1000*60* 15)

// eslint-disable-next-line no-console
console.log('Server listening on ' + host + ':' + port);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(7);





var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

// Add USERS Routes
router.use(__WEBPACK_IMPORTED_MODULE_1__users__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_2__user__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);


var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

// Mock Users
var users = [{ name: 'Alexandre' }, { name: 'Pooya' }, { name: 'Sébastien' }];

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.json(users);
});

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  var id = parseInt(req.params.id);
  if (id >= 0 && id < users.length) {
    res.json(users[id]);
  } else {
    res.sendStatus(404);
  }
});

router.get('/users/:id', function (req, res, next) {
  var id = parseInt(req.params.id);
  if (id >= 0 && id < users.length) {
    res.json(users[id]);
  } else {
    res.sendStatus(404);
  }
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);


var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

router.get('/user/info', function (req, res, next) {
  if (req.cookies.token) {
    res.json({
      code: 0,
      // 关注
      attention: 1008,
      // 动态
      dynamic: 88,
      // 喜欢
      like: 1678
    });
  } else {
    res.json({
      code: 1
    });
  }
});

router.get('/user/sketch', function (req, res, next) {
  if (req.cookies.token) {
    res.json({
      code: 0,
      // 关注
      list: [{
        id: 0,
        title: '死得昂',
        time: new Date()
      }]
    });
  } else {
    res.json({
      code: 1
    });
  }
});

router.get('/user/like', function (req, res, next) {
  if (req.cookies.token) {
    res.json({
      code: 0,
      // 我喜欢的
      list: [{
        id: 0,
        img: 'http://img1.touxiang.cn/uploads/20121029/29-053742_664.jpg',
        title: '死得昂',
        subTitle: '喜欢TA分享的图文',
        des: '用户将网站内容分享到第三方网站,第三方网站的用户点击专有的分享链接,从第三方网站带来社会化流量。 提升网页抓取速度 使用了百度分享的网页可以更快地被百度爬虫发现',
        time: new Date(),
        desSrc: 'desSrc'
      }]
    });
  } else {
    res.json({
      code: 1
    });
  }
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' },
    // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
    extend: function extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
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
};function pushArr(path, value) {
  var pathArr = path.split('.'),
      len = pathArr.length,
      str = 'module.exports';
  for (var i = 0; i < len; i++) {
    str += '.' + pathArr[i];
    if (eval(str) == undefined) {
      eval(str + '= {}');
      if (i == len - 1) {
        eval(str + '= []');
      }
    }
  }
  eval(str).push(value);
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
  for (var i = 0; i < len; i++) {
    str += '.' + pathMap[i];
    if (eval(str) == undefined) {
      eval(str + '= {}');
    }
  }
  if (key) {
    eval(str)[key] = value;
  } else {
    eval(str + '=' + value);
  }
}
// 为JS和Vue文件定制babel配置。https://nuxtjs.org/api/configuration-build/#analyze
pushMap('build.babel', 'presets', ['es2015', 'stage-2']);
pushMap('build.babel', 'plugins', ['transform-async-to-generator', 'transform-runtime']);
pushMap('build.babel', 'comments', true);

// 打包公共模块添加
pushArr('build.vendor', 'swiper');
pushArr('build.vendor', 'qs');

// 插入css自动补全
pushArr('build.postcss', __webpack_require__(9)());
pushArr('build.postcss', __webpack_require__(10)());
pushArr('build.postcss', __webpack_require__(11)());
pushArr('build.postcss', __webpack_require__(12)({ browsers: ['last 3 versions'] }));

// 设置缓存组件数量及时间
pushMap('cache', 'max', 10);
pushMap('cache', 'maxAge', 1000 * 60 * 10);

// 设置全局css
pushArr('css', { src: '~/assets/scss/app.scss', lang: 'scss' });

// 设置开发环境判断值
pushMap('dev', '', "development" !== 'production');

// 设置生产环境变量
pushMap('env', 'baseUrl', 'http://' + (process.env.HOST || 'localhost') + ':' + (process.env.PORT || 3000));

// 开启离线应用
pushMap('offline', '', true);

// 添加插件
// 1.添加全局过滤器
pushArr('plugins', { src: '~/plugins/filters.js' });
// 2.添加google统计
pushArr('plugins', { src: '~/plugins/ga.js', ssr: false });
// 3.添加复制事件后插入版权声明
pushArr('plugins', { src: '~/plugins/copy-right.js', ssr: false });
// 4.添加百度seo自动push脚本
pushArr('plugins', { src: '~/plugins/baidu-seo-push.js', ssr: false });
// 5.添加开启离线应用
pushArr('plugins', { src: '~/plugins/offline.js', ssr: false });
// 6.添加swiper组件
pushArr('plugins', { src: '~/plugins/swiper.js', ssr: false });
// 添加路由中间件
pushArr('router.middleware', 'ssr-cookie');
/********** DO NOT MODIFY **********/
/*---------- END ----------*/

// 设置生产环境变量
pushMap('env', 'baseUrl', Object.is("development", 'production') ? 'http://www.genefamily.com.cn/' : 'http://dev.www.genefamily.com.cn/');
// 定义title
pushMap('head', 'title', '首页');
// 定义title 模板
pushMap('head', 'titleTemplate', '%s - 基因家园');
// 定义html标准及语言
pushMap('head.htmlAttrs', 'xmlns', 'http://www.w3.org/1999/xhtml');
pushMap('head.htmlAttrs', 'lang', 'zh');
// 定义meta
pushArr('head.meta', { charset: 'utf-8' });
pushArr('head.meta', { 'http-equiv': 'cleartype', content: 'on' });
pushArr('head.meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' });
pushArr('head.meta', { name: 'author', content: 'Gemini-90s@hotmail.com' });
pushArr('head.meta', { name: 'MobileOptimized', content: '320' });
pushArr('head.meta', { name: 'HandheldFriendly', content: 'True' });
pushArr('head.meta', { name: 'apple-mobile-web-app-capable', content: 'yes' });
pushArr('head.meta', { hid: 'keywords', name: 'keywords', content: '基因,基因家园, 酒胆' });
pushArr('head.meta', { hid: 'description', name: 'description', content: '基因家园官网 基因家园 酒胆' });
// 添加自定义文件
pushArr('head.link', { rel: 'author', type: 'text/plain', href: '/humans.txt' });
// 添加JavaScript文件
// pushArr('head.script', {type: 'text/javascript', src: '/hotcss.js'})
// 定义没有script提示
pushArr('head.noscript', { innerHTML: 'This website requires JavaScript.' });
// 加载进度条配置
pushMap('loading', 'color', '#3dd4ff');
pushMap('loading', 'height', '.06rem');
// 是否插入http2协议头部 和 开启预载
pushMap('render', 'http2', true);
pushMap('render', 'true', true);
// 路由设置
// 链接激活时使用的 CSS 类名
pushMap('router', 'linkActiveClass', 'link-active');
// 当链接被精确匹配的时候应该激活的 class
pushMap('router', 'linkExactActiveClass', 'exact-link-active');
pushMap('router', 'scrollBehavior', function (to, from, savedPosition) {
  return savedPosition || { x: 0, y: 0 };
});
// 自定义路由配置
pushMap('router', 'extendRoutes', function (routes) {});

pushArr('build.vendor', '~/plugins/better-scroll.js');
pushArr('plugins', { src: '~/plugins/vue-picker.js' });
pushArr('plugins', { src: '~/plugins/vue-city-picker.js' });
pushArr('plugins', { src: '~/plugins/vue-scroll.js' });
pushArr('plugins', { src: '~/plugins/vue-user-photo.js' });

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("postcss-nested");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("postcss-responsive-type");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("postcss-hexrgba");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("autoprefixer");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map