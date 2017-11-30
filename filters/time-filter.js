/*
*
* 时间格式化过滤器
*
* Description
*
*/

// 取剩余秒
const pluralize = (time, label) => {
  return time + label + '前'
}

// 相对时间过滤器，传入时间，返回距离今天有多久
export const timeAgo = time => {
  time = time instanceof Date ? time : new Date(time)
  const between = Date.now() / 1000 - Number(time) / 1000
  if (between < 3600) {
    if (Object.is(~~(between / 60), 0)) {
      return '刚刚'
    }
    return pluralize(~~(between / 60), ' 分钟')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' 小时')
  } else {
    return pluralize(~~(between / 86400), ' 天')
  }
}

// 转换为本地时间格式
export const toLocalString = date => {
  return date ?  new Date(date).toLocaleString() : date
}

// YMDHMS时间转换过滤器
export const toYMD = date => {
  if (!date) { return date }
  date = new Date(date)
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours() > 11 ? '下午' : '上午'}`
}


// 格式yyyy-MM-dd HH:MM:SS
export const hours24 = date => {
  // 补零
  const zeroFill = i => {
    if (i >= 0 && i <= 9) {
      return "0" + i;
    } else {
      return i;
    }
  }
  const time = new Date(date)
  const month = zeroFill(time.getMonth() + 1); // 月
  const day = zeroFill(time.getDate()); // 日
  const hour = zeroFill(time.getHours()); // 时
  const minute = zeroFill(time.getMinutes()); // 分
  const second = zeroFill(time.getSeconds()); // 秒

  // 当前时间
  return time.getFullYear() + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}

