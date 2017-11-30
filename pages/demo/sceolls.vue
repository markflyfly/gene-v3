<template>
  <!--滑动区域-->
  <div id="mescroll" class="mescroll">
    <!--您的项目如果是在微信,QQ,Safari等等iOS浏览器访问的,则需再嵌套<div class="mescroll-bounce"><div>,可解决列表顶部下拉和底部上拉露出浏览器灰色背景和卡顿2秒的问题,可避免数据不满屏下拉刷新dom元素可能不渲染的问题-->
      <!--展示上拉加载的数据列表-->
      <ul id="dataList" class="data-list">
        <li v-for="pd in pdlist">
          <img class="pd-img" :src="pd.pdImg"/>
          <p class="pd-name">{{pd.pdName}}</p>
          <p class="pd-price">{{pd.pdPrice}} 元</p>
          <p class="pd-sold">已售{{pd.pdSold}}件</p>
        </li>
      </ul>
  </div>
</template>
<script>
  import MeScroll from '~/plugins/mescroll.js'
  // 创建vue对象
  export default {
    head() {
      return {
        link: [
          { rel: 'stylesheet', href: '/css/mescroll.min.css' },
        ]
      }
    },
    data() {
      return {
        pdlist1: [
          {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【1】  六罐装荷兰美素佳儿金装2段900g",
            "pdPrice": 1149.00,
            "pdSold": 648
          }, {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【2】  韩国Amore爱茉莉红吕洗发水套装修复受损发质",
            "pdPrice": 89.00,
            "pdSold": 128
          }, {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【3】  Friso美素佳儿 金装婴儿配方奶粉3段900g",
            "pdPrice": 195.00,
            "pdSold": 968
          }, {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【4】  Fisher pdPrice费雪 费雪三轮儿童滑行车",
            "pdPrice": 299.00,
            "pdSold": 85
          }, {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【5】  Babylee巴布力 实木婴儿床 雷卡拉130*70cm",
            "pdPrice": 1889.00,
            "pdSold": 18
          }, {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【6】  Pigeon贝亲 独立三层奶粉盒 送小罐奶粉1段200g",
            "pdPrice": 70.00,
            "pdSold": 658
          }, {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【7】 TTBOO兔兔小布 肩纽扣套装",
            "pdPrice": 268.00,
            "pdSold": 128
          }, {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【8】  Nuna璐拉 婴儿布里奇果精纯嫩肤沐浴露婴儿精纯芦荟胶",
            "pdPrice": 140.00,
            "pdSold": 366
          }, {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【9】  illuma启赋 奶粉3段900g",
            "pdPrice": 252.00,
            "pdSold": 98
          }, {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【10】  Abbott雅培乳蛋白部分水解婴儿配方奶粉3段820g",
            "pdPrice": 89.00,
            "pdSold": 128
          }, {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【11】  韩蜜 酷炫唇蜜（礼盒套装）2.8g*4",
            "pdPrice": 179.00,
            "pdSold": 35
          }, {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【12】  保税区直发【3包装】日本Merries花王纸尿裤NB90",
            "pdPrice": 289.00,
            "pdSold": 1928
          }, {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【13】  Comotomo可么多么 硅胶奶瓶（0-3月奶嘴）150ml绿色",
            "pdPrice": 203.00,
            "pdSold": 87
          }, {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【14】  香港直邮德国瑞德露Rival de Loop芦荟精华安瓶",
            "pdPrice": 152.00,
            "pdSold": 61
          }, {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【15】  保税区直发药师堂尊马油香草味温和保湿无刺激面霜",
            "pdPrice": 269.00,
            "pdSold": 73
          }, {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【16】  香港直邮日本Spatreatment眼膜保湿去细纹法令纹",
            "pdPrice": 219.00,
            "pdSold": 13
          }, {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【17】  韩国MEDIHEALNMF可莱丝针剂睡眠面膜",
            "pdPrice": 81.00,
            "pdSold": 128
          }, {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【18】  DHC蝶翠诗橄榄蜂蜜滋养洗脸手工皂90g",
            "pdPrice": 123.00,
            "pdSold": 77
          }, {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【19】  日本资生堂CPB肌肤之钥新版隔离霜 清爽型 30ml",
            "pdPrice": 429.00,
            "pdSold": 36
          }, {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【20】 Heinz亨氏 婴儿面条优加面条全素套餐组合3口味3盒",
            "pdPrice": 39.00,
            "pdSold": 61
          }, {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【21】  Heinz亨氏 乐维滋果汁泥组合5口味15袋",
            "pdPrice": 69.00,
            "pdSold": 55
          }, {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【22】  保税区直发澳大利亚Swisse高浓度蔓越莓胶囊30粒",
            "pdPrice": 271.00,
            "pdSold": 19
          }, {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【23】  挪威Nordic Naturals小鱼婴幼儿鱼油DHA滴剂",
            "pdPrice": 102.00,
            "pdSold": 125
          }, {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【24】  澳大利亚Bio island DHA for Pregnancy海藻油DHA",
            "pdPrice": 289.00,
            "pdSold": 28
          }, {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【25】  澳大利亚Fatblaster Coconut Detox椰子水",
            "pdPrice": 152.00,
            "pdSold": 17
          }, {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【26】  Suitsky舒比奇 高护极薄舒爽纸尿片尿不湿XL60",
            "pdPrice": 99.00,
            "pdSold": 181
          }, {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【27】  英国JUST SOAP手工皂 玫瑰天竺葵蛋糕皂",
            "pdPrice": 72.00,
            "pdSold": 66
          }, {
            "pdImg": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg",
            "pdName": "【28】  德国NUK 多色婴幼儿带盖学饮杯",
            "pdPrice": 92.00,
            "pdSold": 138
          }
        ],
        mescroll: null,
        pdlist: []
      }
    },
    mounted() {
      // 创建MeScroll对象,down可以不用配置,因为内部已默认开启下拉刷新,重置列表数据为第一页
      // 解析: 下拉回调默认调用mescroll.resetUpScroll(); 而resetUpScroll会将page.num=1,再执行up.callback,从而实现刷新列表数据为第一页;
      const self = this;
      self.mescroll = new MeScroll("mescroll", {
        up: {
          callback: self.upCallback, // 上拉回调
          // 以下参数可删除,不配置
          // page:{size:8}, // 可配置每页8条数据,默认10
          toTop: { // 配置回到顶部按钮
            src: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2807223835,3570653423&fm=27&gp=0.jpg", // 默认滚动到1000px显示,可配置offset修改
            // offset : 1000
          },
          empty: { // 配置列表无任何数据的提示
            warpId: "dataList",
            icon: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1594073720,1827793385&fm=27&gp=0.jpg",
//						  	tip : "亲,暂无相关数据哦~" ,
//						  	btntext : "去逛逛 >" ,
//						  	btnClick : function() {
//						  		alert("点击了去逛逛按钮");
//						  	}
          }
        }
      });

      // 初始化vue后,显示vue模板布局
      document.getElementById("dataList").style.display = "block";
      // 禁止PC浏览器拖拽图片,避免与下拉刷新冲突;如果仅在移动端使用,可删除此代码
      document.ondragstart = function () {
        return false;
      }
    },
    methods: {
      // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
      upCallback: function (page) {
        // 联网加载数据
        const self = this;
        this.getListDataFromNet(page.num, page.size, curPageData => {
           // curPageData = []; // 打开本行注释,可演示列表无任何数据empty的配置

          // 如果是第一页需手动制空列表
          if (page.num == 1) {
            self.pdlist = [];
          }

          // 更新列表数据
          self.pdlist = self.pdlist.concat(curPageData);

          // 联网成功的回调,隐藏下拉刷新和上拉加载的状态;
          // mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
          console.log("page.num=" + page.num + ", page.size=" + page.size + ", curPageData.length=" + curPageData.length + ", self.pdlist.length==" + self.pdlist.length);

          // 方法一(推荐): 后台接口有返回列表的总页数 totalPage
          // self.mescroll.endByPage(curPageData.length, totalPage); //必传参数(当前页的数据个数, 总页数)

          // 方法二(推荐): 后台接口有返回列表的总数据量 totalSize
          // self.mescroll.endBySize(curPageData.length, totalSize); //必传参数(当前页的数据个数, 总数据量)

          // 方法三(推荐): 您有其他方式知道是否有下一页 hasNext
          // self.mescroll.endSuccess(curPageData.length, hasNext); //必传参数(当前页的数据个数, 是否有下一页true/false)

          // 方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据,如果传了hasNext,则翻到第二页即可显示无更多数据.
          self.mescroll.endSuccess(curPageData.length);

        }, function () {
          // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
          self.mescroll.endErr();
        });
      },
      /* 联网加载列表数据 */
      getListDataFromNet(pageNum, pageSize, successCallback, errorCallback) {
        // 延时一秒,模拟联网
        setTimeout(() => {
//          	axios.get("xxxxxx", {
//					params: {
//						num: pageNum, //页码
//						size: pageSize //每页长度
//					}
//				})
//				.then(function(response) {
          const data = this.pdlist1; // 模拟数据: ../res/pdlist1.js
          const listData = []; // 模拟分页数据
          for (let i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
            if (i == data.length) {
              break;
            }
            listData.push(data[i]);
          }
          successCallback && successCallback(listData); // 成功回调
//				})
//				.catch(function(error) {
//					errorCallback&&errorCallback() // 失败回调
//				});
        }, 500)
      }
    },
  }


</script>
<style lang="scss" scoped>
  @import "~assets/scss/variables";
  @import "~assets/scss/mixins";
  /*列表*/
  .mescroll {
    position: fixed;
    top: 0px;
    bottom: px2rem(98px);
    height: auto;
    padding-bottom: .42rem;
    background: #fff;
  }
  .mescroll-bounce {
    background: #fff;
  }

  /*展示上拉加载的数据列表*/
  .data-list {
    display: none;
  }

  .data-list li {
    position: relative;
    padding: px2rem(10px) px2rem(8px) px2rem(10px) px2rem(120px) ;
    border-bottom: 1px solid #eee;
  }

  .data-list .pd-img {
    position: absolute;
    left: px2rem(18px);
    top: px2rem(18px);
    width: px2rem(80px);
    height: px2rem(80px);
  }

  .data-list .pd-name {
    font-size: px2rem(32px);
    line-height: px2rem(40px);
    height: px2rem(40px);
    overflow: hidden;
  }

  .data-list .pd-price {
    margin-top: px2rem(16px);
    color: red;
  }

  .data-list .pd-sold {
    font-size: px2rem(24px);
    margin-top: px2rem(16px);
    color: gray;
  }
</style>