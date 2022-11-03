function lsxj(l1, l2) {
  let result = [];
  let a = 0;
  let b = 0;
  let c = 0;
  for (let i = 0; i < l1.length; i++) {
    a = 10 * a + l1[i];
  }
  for (let i = 0; i < l2.length; i++) {
    b = 10 * b + l2[i];
  }
  c = a + b;

  while (c > 0) {
    result.push(c % 10);
    c = Math.floor(c / 10);
  }
  return result;
}
console.log(lsxj([2, 4, 3], [5, 6, 4]));
