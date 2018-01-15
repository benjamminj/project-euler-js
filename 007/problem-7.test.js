const getNthPrime = require('./problem-7')

test('6th prime number', () => {
  expect(getNthPrime(6)).toBe(13)
})

test('10,001st prime number', () => {
  // ✓ Solved
  expect(getNthPrime(10001)).toBe(104743)
})
