function groupBy(collection, akk) {
  let result = [];
  let key = [];
  let array = [];
  let temNum = new Map();
  collection.forEach((item, index) => {
    key.push(akk(item));
  });
  for (let i = 0; i < key.length; i++) {
    array.push(collection[i]);
    if (!temNum.has(key[i])) {
      for (let j = i + 1; j < key.length; j++) {
        if (key[j] === key[i]) {
          array.push(collection[j]);
        }
      }
      temNum.set(key[i]);
      result.push(key[i] + ' : ' + array);
    }
    array = [];
  }
  return result;
}

console.log(groupBy([4.3, 4.2, 5.3, 4.7, 6.5], Math.floor));
module.exports = groupBy;
