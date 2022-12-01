function pick<T>(object:T, props:Array<keyof T>) {
  let result:any;
  props.forEach((item) => {
    result[item] = object[item];
  });
  return result;
}
