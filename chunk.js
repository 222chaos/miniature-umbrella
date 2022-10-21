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

function chunk1(list, size) {
  let arr = [];
  let a = [];
  for (let c = 0; c < list.length; c = c + size) {
    for (let i = 0; i < size; i++) {
      a.push(i);
    }
    arr.push(a);
    a = [];
  }
  return arr;
}

function chunk3(list, size) {
  let resultArray = [];
  let array = [];
  list.forEach((item, index) => {
    array.push(item);
    if (array.length == size) {
      resultArray.push(array);
      array = [];
    }
    if (index + 1 == list.length && array.length > 0) {
      resultArray.push(array);
    }
  });
  return resultArray;
}

function chunk5(list, size) {
  let array = []; //临时数组
  let resultArray = []; //结果数组
  list.forEach((item, index) => {
    array.push(item); //把item先放入临时数组
    if (array.length == size) {
      //当临时数组里的元素有size个时
      resultArray.push(array); //把临时数组整个放入结果数组
      array = []; //清空临时数组
    }
  });
  if (array.length !== 0) {
    //若临时数组里有剩余元素（当有余数时）
    resultArray.push(array);
  }
  return resultArray;
}

console.log(chunk5([1, 2, 3, 4, 5], 2));
console.log(chunk5([1, 2, 3, 4, 5, 6], 2));
console.log(chunk5([1, 2, 3, 4, 5, 6, 7], 4));
