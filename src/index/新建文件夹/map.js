/**
 *
 * @param {object} obj 对象
 * @param {function} hs (key, value) =>newValue
 * @returns 处理后的对象
 */

function map(obj, hs) {
  let object = {};
  let tempObject = [];
  for (let key in obj) {
    tempObject = hs(key, obj[key]);
    object[key] = tempObject;
  }
  return object;
}
module.exports = map;
