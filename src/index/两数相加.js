function lsxj(l1, l2) {
  let result = [];
  l1.reverse();
  l2.reverse();
  let k = 0;
  for (let i = 0; i < Math.max(l1.length, l2.length); i++) {
    if (l1[i] + l2[i] + k > 9) {
      //需要进位时
      result[i] = l1[i] + l2[i] + k;
      result[i] = result[i] - 10;
      k = 1;
    } else {
      result[i] = l1[i] + l2[i] + k;
      k = 0;
    }
  }
  return result;
}
console.log(lsxj([2, 4, 3], [5, 6, 4]));
