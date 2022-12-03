function jiemi(string, offset) {
  let array = [];
  Array.from(string).forEach((item) => {
    let temp = item.charCodeAt();
    if (temp > 64 && temp < 91) {
      temp = ((temp - 65 - offset + 26) % 26) + 65;
    } else if (temp > 96 && temp < 123) {
      temp = ((temp - 97 - offset + 26) % 26) + 97;
    }
    array.push(String.fromCharCode(temp));
  });
  return array.join('');
}
console.log(
  jiemi(
    'Sp iye exnobcdkxn dro fkveo yp vyfo kxn vyfo iye rkfo qsfox wo S rkfo dy gksd pyb dro pedebo',
    10,
  ),
);

module.exports = jiemi;
