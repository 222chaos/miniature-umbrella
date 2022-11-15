/**
 *
 * @param {*} string 需要加密或解密的字符串
 * @param {*} offset +- 表示偏移方向
 * @returns 加密或解密的结果
 */

function ysjm(string, offset) {
  let array = [];
  Array.from(string).forEach((item) => {
    let temp = item.charCodeAt();
    if (temp > 64 && temp < 91) {
      temp = ((temp - 65 + offset + 26) % 26) + 65;
    } else if (temp > 96 && temp < 123) {
      temp = ((temp - 97 + offset + 26) % 26) + 97;
    }
    array.push(String.fromCharCode(temp));
  });
  return array.join('');
}
console.log(ysjm('DEFGH', -3));
module.exports = ysjm;
