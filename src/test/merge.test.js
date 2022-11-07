const merge = require('../index/merge');

describe('测试 merge 函数', () => {
  it('基本使用', () => {
    expect(
      merge(
        {
          a: [{ b: 2 }, { d: 4 }],
        },
        {
          a: [{ c: 3 }, { e: 5 }],
        }
      )
    ).toEqual({
      a: [
        { b: 2, c: 3 },
        { d: 4, e: 5 },
      ],
    });
  });

  it('多层嵌套', () => {
    expect(
      merge(
        {
          z: {
            b: {
              c: '121',
            },
            d: '12121',
          },
        },
        {
          z: {
            b: {
              e: '1212',
            },
            f: '121212',
          },
        }
      )
    ).toEqual({
      z: {
        b: {
          c: '121',
          e: '1212',
        },
        d: '12121',
        f: '121212',
      },
    });
  });
});
