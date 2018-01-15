const smallestMultiple = require('./problem-5')

test('smallest multiple evenly divisible by all numbers 1-10', () => {
  expect(smallestMultiple(1, 10)).toBe(2520)
})

test('smallest multiple evenly divisible by all numbers 1-20', () => {
  // ✓ Solved
  expect(smallestMultiple(1, 20)).toBe(232792560)
})
