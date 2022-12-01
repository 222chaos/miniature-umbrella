/**
 *
 * @param {object} object 原数组
 * @param {Array} props 需要忽略的数组
 * @returns 剩下的
 */
function omit<T>(object: T, props: Array<keyof T>) {
   props.forEach((item) => {
    delete object[item];
   });
  return object;
  }

  omit({ a: 1, b: 2, c: 3 }, [])
  module.exports = omit;