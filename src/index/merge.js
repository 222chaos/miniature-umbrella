var object = { a: [{ b: 2 }, { d: 4 }] };
var other = { a: [{ c: 3 }, { e: 5 }] };
function merge(object, other) {
  other['a'].forEach((item, index) => {
    object['a'][index] = { ...object['a'][index], ...item };
  });
  return object;
}
console.log(merge(object, other));
