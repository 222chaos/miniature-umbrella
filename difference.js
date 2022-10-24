function difference(array, example) {
  let hash = new Map();
  let result = [];
  array.forEach((item) => {
    hash.set(item);
  });
  array.forEach((item, index) => {
    if (!hash.has(example[index])) {
      result.push(item);
    }
  });
  return result;
}
module.exports = difference;
console.log(difference([3, 2, 1], [4, 0]));
console.log(difference([3, 2, 1], [4, 2, 1]));
console.log(difference([3, 2, 1], [2, 3]));
