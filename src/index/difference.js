function difference(array, example) {
  let hash = new Map();
  let result = [];
  example.forEach((item) => {
    hash.set(item);
  });
  array.forEach((item, index) => {
    if (!hash.has(item)) {
      result.push(item);
    }
  });
  return result;
}
module.exports = difference;
