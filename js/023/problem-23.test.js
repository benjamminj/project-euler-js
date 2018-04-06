const { getSumOfNonAbundantSumsBelow } = require('./problem-23')

test('sum of all non-abundant numbers', () => {
  expect(getSumOfNonAbundantSumsBelow(28123)).toBe(4179871)
})
