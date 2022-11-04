function chunk(list, size) {
  let array = []; //临时数组
  let resultArray = []; //结果数组
  if (size == 0) {
    list = [];
  }
  if (size < 0) {
    list = list.reverse();
    size = Math.abs(size);
  }
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

module.exports = chunk;
