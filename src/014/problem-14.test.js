const getHighestChain = require('./problem-14')

test('highest chain of a number under 1 million', () => {
  // ✔ Solved
  expect(getHighestChain(1e6)).toBe(837799)
})
