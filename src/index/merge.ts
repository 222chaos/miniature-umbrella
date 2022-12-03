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

const merge = (target: {}, source: {}) => {
  let sto;
  if (target == undefined) {
    return source;
  }
  if (typeof source !== typeof target || (isBase(source) && isBase(target))) {
    sto = target;
  }
  if (isObjectNotArray(source) && isObjectNotArray(target)) {
    sto = mergeForObject(source, target);
  }
  if (Array.isArray(source) && Array.isArray(target)) {
    sto = mergeForArray(source, target);
  }
  return sto;
};
function isBase(baseType: {}) {
  if (
    typeof baseType == 'string' ||
    typeof baseType == 'number' ||
    typeof baseType == 'undefined'
    //typeof baseType == 'nul1'
  ) {
    return true;
  }
  return false;
}
function isObjectNotArray(example: {}) {
  if (typeof example == 'object') {
    if (!Array.isArray(example)) {
      return true;
    }
  }
  return false;
}
function mergeForArray(source: string[], target: Record<string, any>) {
  let sto = target;
  source.forEach((_, index) => {
    if (isBase(source[index]) && target[index] !== undefined) {
      sto.push(_);
    }
    sto[index] = func(source[index], target[index]);
  });
  return sto;
}
function mergeForObject(source: Record<string, any>, target: Record<string, any>) {
  let sto = target;
  Object.keys(source).map((key) => {
    if (isBase(source[key]) && target[key] !== undefined) {
      sto[key] = target[key];
    }
    sto[key] = func(source[key], target[key]);
  });
  return sto;
}
function func(source: {}, target: {}) {
  if (
    typeof source !== typeof target ||
    (isObjectNotArray(source) && isObjectNotArray(target)) ||
    (Array.isArray(source) && Array.isArray(target))
  ) {
    return merge(source, target);
  }
}
module.exports = merge;
