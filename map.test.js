const map = require('./map');
describe('测试 map ', () => {
  it('基本使用', () => {
    expect(map({ a: 5, b: 10 }, (key, value) => value * 2)).toEqual({ a: 10, b: 20 });
  });
});
