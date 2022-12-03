/**
 *
 */

var obj = { a: { b: { c: 'd' } } };
function get(inception, target) {
  let newobj = inception;
  for (let i = 0; i < target.length; i++) {
    if (!newobj[target[i]] || target[i] == !Object.keys(newobj)) {
      return undefined;
    }

    newobj = newobj[target[i]];
  }
  return newobj;
}
module.exports = get;
