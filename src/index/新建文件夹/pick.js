function pick(object, props) {
  let result = {};
  props.forEach((item) => {
    result[item] = object[item];
  });
  return result;
}
