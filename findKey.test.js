const findKey = require('./findKey');
describe('测试 findKey 函数', () => {
  it('基本使用', () => {
    var users = {
      barney: { age: 36, active: true },
      fred: { age: 40, active: false },
      pebbles: { age: 1, active: true },
    };
    expect(
      findKey(users, function (o) {
        return o.age < 40;
      }),
    ).toEqual('barney');
  });
});
