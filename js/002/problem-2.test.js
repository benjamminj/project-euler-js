const fibEven = require('./problem-2')

test.only('sum of all even-valued terms under 4 million', () => {
  // ✔ Solved
  expect(fibEven(4000000)).toBe(4613732)
})
