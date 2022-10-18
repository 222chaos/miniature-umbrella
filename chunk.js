// 自己实现
function chunk(list, size) {
  let len = list.length;
  if (size < 1 || !len) {
    return [];
  }
  if (size > len) {
    return [list];
  }
  // 最终返回数组
  let res = [];
  // 向下取整
  let integer = Math.floor(len / size);
  // 取余
  let rest = len % size;
  for (let i = 1; i <= integer; i++) {
    res.push(list.splice(0, size));
  }
  if (rest) {
    res.push(list.splice(0, rest));
  }
  return res;
}
// console.log(chunk([1, 2, 3, 4, 5], 0));
console.log(chunk([1, 2, 3, 4, 5], -1));
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5], 3));
console.log(chunk([1, 2, 3, 4, 5], 4));
console.log(chunk([1, 2, 3, 4, 5], 5));
console.log(chunk([1, 2, 3, 4, 5], 6));
// []
// []
// [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
// [ [ 1, 2, 3 ], [ 4, 5 ] ]
// [ [ 1, 2, 3, 4 ], [ 5 ] ]
// [ [ 1, 2, 3, 4, 5 ] ]
// [ [ 1, 2, 3, 4, 5 ] ]
