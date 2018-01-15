const fibEven = require('./problem-2')

test('sum of all even-valued terms under 4 million', () => {
  // ✔ Solved
  expect(fibEven()).toBe(4613732)
})
