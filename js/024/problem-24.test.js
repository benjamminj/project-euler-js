const {
  findNthLexicographicPermutation,
  getNumberOfPermutationsPerDigit,
  findNthPermutationDigit
} = require('./problem-24')

describe('getNumberOfPermutationsPerDigit', () => {
  test('should return 1 for 2 digits', () => {
    expect(getNumberOfPermutationsPerDigit(2)).toEqual(1)
  })

  test('should return 2 for 3 digits', () => {
    expect(getNumberOfPermutationsPerDigit(3)).toEqual(2)
  })

  test('should return 6 for 4 digits', () => {
    expect(getNumberOfPermutationsPerDigit(4)).toEqual(6)
  })
})

describe('findNthPermutationDigit', () => {
  test('should return 2 for the 3rd permutation & 3 digits', () => {
    expect(findNthPermutationDigit(3, 3)).toEqual(2)
  })

  test('should return 3 for the 13th permutation & 4 digits', () => {
    expect(findNthPermutationDigit(13, 4)).toEqual(3)
  })

  test('should return 3 for the millionth permutation & 10 digits', () => {
    expect(findNthPermutationDigit(1e6, 10)).toEqual(3)
  })
})

describe('findNthLexicograaphicPermutation', () => {
  test('should return 120 for the 4th permutation of [0, 1, 2]', () => {
    expect(findNthLexicographicPermutation(4, [0, 1, 2])).toEqual(120)
  })

  test('should return 120 for the 4th permutation of [0, 1, 2]', () => {
    expect(
      findNthLexicographicPermutation(1e6, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    ).toEqual(2783915460)
  })
})
