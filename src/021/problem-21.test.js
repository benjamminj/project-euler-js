const getAmicableNumbersSum = require('./problem-21')

test('amicable number sum of 10,000', () => {
  // ✔ Solved
  expect(getAmicableNumbersSum(10000)).toBe(31626)
});
