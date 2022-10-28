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
