const { findNumOfPerms, findNumOfPermsPerDigit } = require('./problem-24')

describe('findNumOfPerms', () => {
  test('should return `2` given 2 as input', () => {
    expect(findNumOfPerms(2)).toEqual(2)
  })

  test('should return `6` given 3 as input', () => {
    expect(findNumOfPerms(3)).toEqual(6)
  })

  test('should return `24` given 4 as input', () => {
    expect(findNumOfPerms(4)).toEqual(24)
  })
})

describe('findNumOfPermsPerDigit', () => {
  test('should return `2` given `3` as input', () => {
    expect(findNumOfPermsPerDigit(3)).toEqual(2)
  })

  test('should return `6` given `4` as input', () => {
    expect(findNumOfPermsPerDigit(4)).toEqual(6);
  });
})
