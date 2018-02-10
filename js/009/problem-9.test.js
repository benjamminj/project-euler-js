const getTripleProductWithSumOf = require('./problem-9')

test('get product of pythagorean triple with a sum of 1000', () => {
  // ✓ Solved
  expect(getTripleProductWithSumOf(1000)).toBe(31875000)
});
