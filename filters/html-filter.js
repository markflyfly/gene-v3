/*
*
* HTML编译输出过滤器
*
* Description
*
*/

// 文字溢出过滤器
export const textOverflow = (text, length) => {
  const _length = length || text.length
  const cansub = _length && text && text.length > _length
  return cansub ? text.substr(0, _length) + '...' : text
}

// 首字母大写
export const firstUpperCase = str => {
  return str ? str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase()) : str
}

// 货币表示法
export const currency = (num) => {
  if (num && num != null) {
    num = String(num);
    // eslint-disable-next-line
    let temp = num.split('').reverse().join('').match(/(\d{1,3})/g);
    return temp.join(',').split('').reverse().join('');
  } else if (num === 0) {   // 注意===在这里的使用，如果传入的num为0,if中会将其判定为boolean类型，故而要另外做===判断
    return 0;
  } else {
    return 0;
  }
}
