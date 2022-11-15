const ysjm = require("../index/ysjm");
describe("测试ysjm函数", () => {
  it("正常使用", () => {
    expect(ysjm("ABCDE", 3)).toEqual("DEFGH");
    expect(ysjm("DEFGH", -3)).toEqual("ABCDE");
  });
});
