const getNumPaths = require('./problem-15')

test('number of paths in a 20x20 grid', () => {
  // ✔ Solved
  expect(getNumPaths(20)).toBe(137846528820)
});
