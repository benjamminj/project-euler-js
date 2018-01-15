const sumSquareDifference = require('./problem-6')

test('first 10 natural numbers', () => {
  expect(sumSquareDifference(10)).toBe(2640)
})

test('first 100 natural numbers', () => {
  // ✓ Solved
  expect(sumSquareDifference(100)).toBe(25164150)
})
