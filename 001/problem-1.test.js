const calcSumOfMults = require('./problem-1')

test('sum of mults of 3  & 5 below 10', () => {
  expect(calcSumOfMults(10)).toBe(23)
})

test('sum of mults of 3 & 5 below 1000', () => {
  // ✔ Solved
  expect(calcSumOfMults(1000)).toBe(233168)
})
