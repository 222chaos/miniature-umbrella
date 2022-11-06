const difference = require("../index/difference");
describe("测试 difference 函数", () => {
  it("基本使用", () => {
    expect(difference([3, 2, 1], [4, 2, 0])).toEqual([3, 1]);
  });
  it("后比前长时", () => {
    expect(difference([3], [4, 2])).toEqual([3]);
  });
  it("前比后长时", () => {
    expect(difference([3, 2, 1], [2])).toEqual([3, 1]);
  });
});
