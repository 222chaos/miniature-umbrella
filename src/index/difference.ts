function difference(array:number[], example:number[]) {
  let hash = new Map();
  let result:number[] = [];
  example.forEach(item => {
    hash.set(item,null);
  });
  array.forEach((item, index) => {
    if (!hash.has(item)) {
      result.push(item);
    }
  });
  return result;
}
module.exports = difference;
