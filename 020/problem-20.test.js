const getSumOfFactorialDigits = require('./problem-20')

test('sum of digits of a 100th factorial', () => {
  // ✔ Solved
  expect(getSumOfFactorialDigits(100)).toBe(648)
});
