// 『REM』手机屏幕适配
// @param {designWidth} 设计稿宽度
// @param {rem2px} 缩放比例
(function (window, document) {
  var hotcss = {}
  // 根据devicePixelRatio自定计算scale
  // 可以有效解决移动端1px这个世纪难题。
  !function () {
    var viewportEl = document.querySelector('meta[name="viewport"]');
    var dpr = window.devicePixelRatio || 1;
    dpr = dpr >= 3 ? 3 : dpr >= 2 ? 2 : 1;
    document.documentElement.setAttribute('data-dpr', dpr);
    var scale = 1 / dpr;
    var content = 'width=device-width, initial-scale=' + scale + ', minimum-scale=' + scale + ', maximum-scale=' + scale + ', user-scalable=no';
    if (viewportEl) {
      viewportEl.setAttribute('content', content);
    } else {
      viewportEl = document.createElement('meta');
      viewportEl.setAttribute('name', 'viewport');
      viewportEl.setAttribute('content', content);
      document.head.appendChild(viewportEl);
    }
  }();
  hotcss.mresize = function (designWidth, rem2px) {
    var adaptId = document.getElementById('hotcss')
    if (adaptId) {
      document.documentElement.style.fontSize = '100%'
      adaptId.remove()
    }
    designWidth = designWidth || document.getElementById('hotjs').getAttribute('designWidth') || 750
    rem2px = rem2px || 100
    var d = window.document.createElement('div')
    d.style.width = '1rem'
    d.style.display = "none"
    var head = window.document.getElementsByTagName('head')[0]
    head.appendChild(d)
    var defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'))
    d.remove()
    document.documentElement.style.fontSize = window.innerWidth / designWidth * rem2px / defaultFontSize * 100 + '%'
    var st = document.createElement('style')
    st.setAttribute('id', 'hotcss')
    var portrait = "@media screen and (min-width: " + window.innerWidth + "px) {html{font-size:" + window.innerWidth / (designWidth / rem2px) / defaultFontSize * 100 + "%;}}"
    var landscape = "@media screen and (min-width: " + window.innerHeight + "px) {html{font-size:" + window.innerHeight / (designWidth / rem2px) / defaultFontSize * 100 + "%;}}"
    st.innerHTML = portrait + landscape
    head.appendChild(st)
    // return defaultFontSize
  }
  // 直接调用一次
  hotcss.mresize();
  // 绑定resize的时候调用
  window.addEventListener('resize', function () {
    clearTimeout(hotcss.tid);
    hotcss.tid = setTimeout(hotcss.mresize, 33);
  }, false);

  window.hotcss = hotcss;
})(window, document);
