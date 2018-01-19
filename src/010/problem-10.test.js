const sumOfPrimes = require('./problem-10')

test('sum of primes below 10', () => {
  expect(sumOfPrimes(10)).toBe(17)
})

test('sum of primes below 2 million', () => {
  // ✔ Solved
  // todo -- test takes roughly 20s to run, see if I can speed it up
  expect(sumOfPrimes(2e6)).toBe(142913828922)
})
