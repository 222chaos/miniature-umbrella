function zl(string) {
  var n = /^[A-Z]+$/g;
  let array = [];
  string.forEach((item) => {
    array.push(item.replace(/[a-z0-9\-\_]*\./, '.'));
  });
  return array;
}
module.exports = zl;
