const omit = require('../index/omit');
describe('测试 omit 函数', () => {
  it('基本使用', () => {
    expect(omit({ a: 1, b: 2, c: 3 }, ['a', 'c'])).toEqual({ b: 2 });
  });
});
