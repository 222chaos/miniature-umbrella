const temporary = require('./temporary');
describe('测试 tm 函数', () => {
  it('基本使用', () => {
    expect(temporary([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  it('错误使用', () => {
    expect(temporary([3, 2, 4], -6)).toEqual(undefined);
  });
});
