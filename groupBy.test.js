const groupBy = require('./groupBy');
describe('测试 groupBy 函数', () => {
  it('基本使用', () => {
    expect(groupBy([4.3, 4.2, 5.3, 4.7, 6.5], Math.floor)).toEqual({
      4: [4.3, 4.2, 4.7],
      5: [5.3],
      6: [6.5],
    });

    expect(
      groupBy([1, 2, 3, 4, 5, 6], (item) => {
        if (item % 2 === 0) {
          return '偶数';
        }
        return '奇数';
      }),
    ).toEqual({
      偶数: [2, 4, 6],
      奇数: [1, 3, 5],
    });
  });
});
