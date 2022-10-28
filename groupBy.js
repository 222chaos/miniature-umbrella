function groupBy(collection, hs) {
  let result = {};
  let key = [];
  collection.forEach((item, index) => {
    key.push(hs(item));
  });
  key.forEach((item, index) => {
    if (!result[item]) {
      result[item] = [];
    }
    result[item].push(collection[index]);
  });
  return result;
}
console.log(groupBy([4.3, 4.2, 5.3, 4.7, 6.5], Math.floor));
module.exports = groupBy;
