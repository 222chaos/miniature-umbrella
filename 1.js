var a = [{ b: 2 }, { d: 4 }, "1"];
var b = [{ c: 4 }, { e: 5 }, "1"];

function merge1(a, b) {
  console.log(JSON.stringify(a));
  console.log(JSON.stringify(b));
  let storage;
  if (Array.isArray(a) && Array.isArray(b)) {
    storage = a;
    a.forEach((item, index) => {
      if (!typeof storage[index] == "object") {
        storage[index] = merge1(item, b[index]);
      } else {
        storage[index] = b[index];
      }
      a[index] = { ...item, ...storage[index] };
    });
  }
  return a;
}

const merge = (a, b) => {
  const newObj = {};
  if (typeof a === "object" && typeof b === "object") {
    Object.keys(a).map((key) => {
      if (key in b) {
        newObj[key] = merge(a[key], b[key]);
      } else {
        newObj[key] = b[key];
      }
    });
  }
  return newObj;
};
console.log(JSON.stringify(merge1(a, b)));
