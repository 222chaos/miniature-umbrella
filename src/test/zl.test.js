const zl = require("../index/zl");
describe("测试zl函数", () => {
  it("正常使用", () => {
    expect(
      zl([
        "ADVANCED MATH_35161fc1-41e9-4203-b751-7c88cb3a2783_cube01.mov",
        "ADVANCED_MATH_aa.mp3",
      ])
    ).toEqual(["ADVANCED MATH.mov", "ADVANCED_MATH.mp3"]);
  });
});
