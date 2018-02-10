const largestPrimeFactor = require('./problem-3')

test('largest prime factor of 13195', () => {
  expect(largestPrimeFactor(13195)).toBe(29)
})

test('largest prime factor of 600851475143', () => {
  // ✔ Solved
  expect(largestPrimeFactor(600851475143)).toBe(6857)
})
