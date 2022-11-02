/**
 *
 */
var users = {
  barney: { age: 36, active: true },
  fred: { age: 40, active: false },
  pebbles: { age: 1, active: true },
};

function findKey(object, predicate) {
  for (let key in object) {
    if (predicate(object[key])) {
      return key;
    }
  }
}
module.exports = findKey;
