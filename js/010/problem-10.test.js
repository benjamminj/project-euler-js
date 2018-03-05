const { range } = require('../utils')
const { getPrimesBelow, sumOfPrimes } = require('./problem-10')

test('primes below 15', () => {
  // expect(getPrimesBelow(15)).toEqual([2, 3, 5, 7, 11, 13])
  console.log(getPrimesBelow(200))
})

test('sum of primes below 10', () => {
  expect(sumOfPrimes(10)).toEqual(17)
})

test.only('sum of primes below 2 million', () => {
  // ✔ Solved
  // todo -- test takes roughly 20s to run, see if I can speed it up
  expect(sumOfPrimes(2e6)).toEqual(142913828922)
})
