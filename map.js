function map(obj, hs) {
  let object = {};

  for (let key in obj) {
    obj = hs(key, obj[key]);
    object[key] = obj;
  }
  return object;
}

console.log(map({ a: 5 }, (key, value) => value * 2));
