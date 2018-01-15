const findTriangle = require('./problem-12')

test('first triangle number to have over five divisors', () => {
  expect(findTriangle(5)).toBe(28)
})

test('first triangle to have over 500 divisors', () => {
  // ✔ Solved
  expect(findTriangle(500)).toBe(76576500)
})
