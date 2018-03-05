// https://projecteuler.net/problem=23
const { range, filterReduce } = require('../utils')
const { getProperDivisorsSum } = require('../021/problem-21')

// general util functions (todo -- move into a separate folder / lib?)

const isAbundantNumber = num => getProperDivisorsSum(num) > num

const getAbundantNumsBelow = num => range(1, num).filter(isAbundantNumber)

const isSumOfAbundantNums = (
  num,
  abundantNums = getAbundantNumbersBelow(num)
) =>
  abundantNums.find(abundantNum => {
    return abundantNums.includes(num - abundantNum) ? true : false
  })
    ? true
    : false

const getNonAbundantSumsBelow = num => {
  // todo -- refactor to not need mutable abundant nums
  let abundantNumsReverse = getAbundantNumsBelow(num).reverse()
  const reverseNums = range(1, num).reverse()

  return reverseNums.filter(i => {
    const biggerIndex = abundantNumsReverse.findIndex(
      abundantNum => i >= abundantNum
    )

    if (biggerIndex > -1) {
      abundantNumsReverse = abundantNumsReverse.slice(biggerIndex)
    }

    return !isSumOfAbundantNums(i, abundantNumsReverse)
  })
}

createNonAbundantSumsBelowFilter = (num) => {
  let abundantNumsReverse = getAbundantNumsBelow(num).reverse()
  // const reverseNums = range(1, num).reverse()

  return i => {
    const biggerIndex = abundantNumsReverse.findIndex(
      abundantNum => i >= abundantNum
    )

    if (biggerIndex > -1) {
      abundantNumsReverse = abundantNumsReverse.slice(biggerIndex)
    }

    return !isSumOfAbundantNums(i, abundantNumsReverse)
  }
}

const getSumOfNonAbundantSumsBelow = num => {
  return getNonAbundantSumsBelow(num).reduce((sum, el) => sum + el, 0)
}

module.exports = {
  getSumOfNonAbundantSumsBelow
}
