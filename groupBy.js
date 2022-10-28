function groupBy(collection, hs) {
  let result = {};
  collection.forEach((item, index) => {
    const key = hs(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  });
  return result;
}
console.log(groupBy([4.3, 4.2, 5.3, 4.7, 6.5], Math.floor));
module.exports = groupBy;
