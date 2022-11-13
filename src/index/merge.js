var a = { a: [{ b: 2 }, { d: 4 }] };
var b = { a: [{ c: 4 }, { e: 5 }] };
var e = { a: 'b' };
var f = { b: 'a' };

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

const merge = (b, a) => {
  let sto;
  if (b == undefined) {
    return a;
  }
  if (typeof a !== typeof b) {
    sto = b;
  }
  if (isObjectNotArray(a) && isObjectNotArray(b)) {
    sto = forObject(a, b);
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    sto = forArray(a, b);
  }
  if (isBase(a) && isBase(b)) {
    sto = b;
  }
  return sto;
};
function isBase(baseType) {
  if (typeof baseType == 'string') {
    return true;
  }
  if (typeof baseType == 'number') {
    return true;
  }
  if (typeof baseType == 'undefined') {
    return true;
  }
  if (typeof baseType == 'nul1') {
    return true;
  }
  return false;
}

function isObjectNotArray(example) {
  if (typeof example == 'object') {
    if (!Array.isArray(example)) {
      return true;
    }
  }
  return false;
}
function forArray(a, b) {
  let sto = b;
  a.forEach((_, index) => {
    if (isBase(a[index] && b[index] !== undefined)) {
      sto[index] = b[index];
    }
    if (typeof a[index] !== typeof b[index]) {
      sto[index] = merge(a[index], b[index]);
    }
    if (isObjectNotArray(a[index]) && isObjectNotArray(b[index])) {
      sto[index] = forObject(a[index], b[index]);
    }
    if (Array.isArray(a[index]) && Array.isArray(b[index])) {
      sto[index] = forArray(a[index], b[index]);
    }
  });
  return sto;
}
function forObject(a, b) {
  let sto = b;
  Object.keys(a).map((key) => {
    if (isBase(a[key]) && b[key] !== undefined) {
      sto[key] = b[key];
    }
    if (typeof a[key] !== typeof b[key]) {
      sto[key] = merge(a[key], b[key]);
    }
    if (isObjectNotArray(a[key]) && isObjectNotArray(b[key])) {
      sto[key] = forObject(a[key], b[key]);
    }
    if (Array.isArray(a[key]) && Array.isArray(b[key])) {
      sto[key] = forArray(a[key], b[key]);
    }
  });
  return sto;
}
console.log(JSON.stringify(merge(['a'], ['b'])));
console.log(JSON.stringify(merge(c, d)));

module.exports = merge;
