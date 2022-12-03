/**
 *
 * @param {object} inception 原对象
 * @param {array} key 需要set的key
 * @param {integer} value 最终的值
 * @returns set之后的对象
 */

function set(inception: Record<any, any>, key: string[], value: string) {
  let storage = inception;
  key.reverse();
  storage = value;
  key.forEach((item) => {
    let temp: Record<string, any> = {};
    temp[item] = storage;
    storage = temp;
  });
  return storage;
}
module.exports = set;
