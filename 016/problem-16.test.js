const getPowerDigitSum = require('./problem-16')

test('power digit sum of 2 ** 15', () => {
  expect(getPowerDigitSum(2, 15)).toBe(26)
});

test('power digit sum of 2 ** 1000', () => {
  // ✔ Solved
  expect(getPowerDigitSum(2, 1000)).toBe(1366)
});
