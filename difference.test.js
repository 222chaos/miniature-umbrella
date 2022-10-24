const difference = require('./difference');
describe('测试 difference 函数', () => {
  it('基本使用', () => {
    expect(difference([3, 2, 1], [4, 2])).toEqual([3, 1]);
  });
  it('负数使用', () => {
    expect(difference([3, -2, 1], [4, 2])).toEqual([3, -2, 1]);
  });
});
