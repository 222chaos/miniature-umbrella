const set = require("../index/set");
describe("测试set函数", () => {
  it("正常使用", () => {
    expect(set({}, ["a", "b"], 123)).toEqual({ a: { b: 123 } });
    expect(set({}, ["a", "b", "c"], 123)).toEqual({ a: { b: { c: 123 } } });
  });
});
