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
/**
 *
 * @param {*} target
 * @param {*} source
 * @returns
 */
const merge = (target, source) => {
  let sto;
  if (target == undefined) {
    return source;
  }
  if (typeof source !== typeof target) {
    sto = target;
  }
  if (isObjectNotArray(source) && isObjectNotArray(target)) {
    sto = mergeForObject(source, target);
  }
  if (Array.isArray(source) && Array.isArray(target)) {
    sto = mergeForArray(source, target);
  }
  if (isBase(source) && isBase(target)) {
    sto = target;
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
function mergeForArray(source, target) {
  let sto = target;
  source.forEach((_, index) => {
    if (isBase(source[index]) && target[index] !== undefined) {
      sto.push(_);
    }
    if (typeof source[index] !== typeof target[index]) {
      sto[index] = merge(source[index], target[index]);
    }
    if (isObjectNotArray(source[index]) && isObjectNotArray(target[index])) {
      sto[index] = mergeForObject(source[index], target[index]);
    }
    if (Array.isArray(source[index]) && Array.isArray(target[index])) {
      sto[index] = mergeForArray(source[index], target[index]);
    }
  });
  return sto;
}
function mergeForObject(source, target) {
  let sto = target;
  Object.keys(source).map((key) => {
    if (isBase(source[key]) && target[key] !== undefined) {
      sto[key] = target[key];
    }
    if (typeof source[key] !== typeof target[key]) {
      sto[key] = merge(source[key], target[key]);
    }
    if (isObjectNotArray(source[key]) && isObjectNotArray(target[key])) {
      sto[key] = mergeForObject(source[key], target[key]);
    }
    if (Array.isArray(source[key]) && Array.isArray(target[key])) {
      sto[key] = mergeForArray(source[key], target[key]);
    }
  });
  return sto;
}

module.exports = merge;
