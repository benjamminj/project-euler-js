const { filterReduce, range } = require('./utils')

describe('range', () => {
  test('should create a range from 1-10', () => {
    const result = range(1, 10)
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    expect(result).toEqual(expected)
  })

  test('should allow a custom mapperFn to the created array as its second param', () => {
    // example: create a range of only odd numbers of length a-b
    const result = range(1, 10 / 2, (_, i) => (i + 1) * 2 -  1)
    const expected = [1, 3, 5, 7, 9]
    expect(result).toEqual(expected)
  })
})

test('should filter out values > 5 & reduce the array in a single pass', () => {
  const filterFn = el => el <= 5 // filter everything bigger than 5
  const reduceFn = (acc, el) => acc + el
  const arr = [1, 2, 3, 5, 7, 2]

  const result = filterReduce(filterFn, reduceFn, 0, arr)
  const expected = 13 // 1 + 2 + 3 + 5 + 2

  expect(result).toEqual(expected)
})
