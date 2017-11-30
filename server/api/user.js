import {Router} from 'express'

const router = Router()

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
    })
  } else {
    res.json({
      code: 1
    })
  }
})

router.get('/user/sketch', function (req, res, next) {
  if (req.cookies.token) {
    res.json({
      code: 0,
      // 关注
      list: [
        {
          id: 0,
          title: '死得昂',
          time: new Date()
        }
      ]
    })
  } else {
    res.json({
      code: 1
    })
  }
})

router.get('/user/like', function (req, res, next) {
  if (req.cookies.token) {
    res.json({
      code: 0,
      // 我喜欢的
      list: [
        {
          id: 0,
          img: 'http://img1.touxiang.cn/uploads/20121029/29-053742_664.jpg',
          title: '死得昂',
          subTitle: '喜欢TA分享的图文',
          des: '用户将网站内容分享到第三方网站,第三方网站的用户点击专有的分享链接,从第三方网站带来社会化流量。 提升网页抓取速度 使用了百度分享的网页可以更快地被百度爬虫发现',
          time: new Date(),
          desSrc: 'desSrc'
        }
      ]
    })
  } else {
    res.json({
      code: 1
    })
  }
})

export default router
