/**
 *
 */

var obj = { a: { b: { c: 'd' } } };
function get(object, arr) {
  let newobj = object;
  for (let i = 0; i < arr.length; i++) {
    if (!newobj[arr[i]]) {
      return undefined;
    }
    newobj = newobj[arr[i]];
  }
  return newobj;
}

module.exports = get;
