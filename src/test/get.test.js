const get = require("../index/get");
describe("测试 get 函数", () => {
  it("基本使用", () => {
    var obj = { a: { b: { c: "d" } } };
    expect(get(obj, ["a"])).toEqual({ b: { c: "d" } });
    expect(get(obj, ["e", "b"])).toEqual(undefined);
  });
});
