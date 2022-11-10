var a = { a: [{ b: 2 }, { d: 4 }] };
var b = { a: [{ c: 4 }, { e: 5 }] };
var c = {
  z: {
    b: {
      c: '121',
    },
    d: '12121',
  },
};
var d = {
  z: {
    b: {
      e: '1212',
    },
    f: '121212',
  },
};
var e = [{ a: 'b' }];
var f = [{ b: 'a' }];
function merge(object, other) {
  let storage = object;
  Object.keys(object).forEach((key) => {
    let another = other[key];
    let origin = storage[key];
    if (typeof origin == 'object' && typeof another == 'object') {
      if (key in other) {
        origin = merge(origin, another);
      } else {
        origin = another;
      }
    }
    if (Array.isArray(origin)) {
      if ((origin = another))
        origin.forEach((item, index) => {
          origin[index] = { ...item, ...another[index] };
        });
    } else {
      origin = another;
    }
  });
  return storage;
}
console.log(JSON.stringify(merge(a, b)));
console.log(JSON.stringify(merge(c, d)));
console.log(JSON.stringify(merge(e, f)));
module.exports = merge;
