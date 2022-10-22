const chunk = require("./chunk");

test("chunk([1,2,3,4,5,6,7],4) to be [[1,2,3,4],[5,6,7]]", () => {
  expect(chunk([1, 2, 3, 4, 5, 6, 7], 4)).toEqual([
    [1, 2, 3, 4],
    [5, 6, 7],
  ]);
});
