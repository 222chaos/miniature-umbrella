/**
 *
 */
var obj = { a: { b: { c: 'd' } } };
function get<T extends {}>(inception:T, target:Array<keyof T>) {
  let newobj = inception;
  for (let i = 0; i < target.length; i++) {
    if (!newobj[target[i]]) {
      return undefined;
    }
    newobj = newobj[target[i]] as T;
  }
  return newobj;
}
module.exports = get;
