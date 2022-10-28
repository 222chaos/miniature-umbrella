/**
 * 将数组的值按照回调方法来进行分组
 * @param  {} collection 要处理的数组
 * @param  {} hs 回调方法
 * @return object 分组后的数组
 */
function groupBy(collection, hs) {
  let result = {};
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
