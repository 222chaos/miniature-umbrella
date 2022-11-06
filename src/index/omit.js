/**
 *
 * @param {object} object 原数组
 * @param {Array} props 需要忽略的数组
 * @returns 剩下的
 */

function omit(object, props) {
  props.forEach((item) => {
    delete object[item];
  });
  return object;
}
omit();
module.exports = omit;
