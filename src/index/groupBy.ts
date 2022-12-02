/**
 *
 * @param {Array}collection - 需要操作的数组
 * @param {function} hs - 具体的函数
 * @returns {object} 分组后的数组
 *
 */

function groupBy(collection:number[], hs:(x:number)=>string|number) {
  let result:any = {};
  collection.forEach((item) => {
    const key = hs(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  });
  return result;
}
module.exports = groupBy;
