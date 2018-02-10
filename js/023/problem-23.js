// https://projecteuler.net/problem=23

const getDivisors = num => {
  let divisors = []
  let i = 0

  while (i <= num / 2) {
    let rem = num % i

    if (rem === 0) divisors.push(i)

    i++
  }

  return divisors
}

const isAbundantNumber = num => {
  return getDivisors(num).reduce((sum, div) => sum + div, 0) > num
}

const getAbundantNumbersBelow = limit => {
  // todo -- faster way of getting list of nums...do I actually even need this step
  // todo -- refactor to be more functional / cleaner
  let i = 12 // 12 is the lowest abundant number
  let abundantNums = []

  do {
    if (isAbundantNumber(i)) {
      abundantNums.push(i)
    }

    i++
  } while (i <= limit)

  return abundantNums
}

const isSumOfAbundantNumbers = (num, abundantNums) => {
  let i = 0

  while (i < abundantNums.length / 2) {
    const otherAddend = num - abundantNums[i]


    if (abundantNums.includes(otherAddend)) {
      return true
    }

    i++
  }

  return false
}

const findHighestNonAbundantSumBelow = (num, abundantNums) => {
  let i = num

  while (i > 0) {
    if (!isSumOfAbundantNumbers(i, abundantNums)) {
      return i
    }

    i--
  }
}

const getSumOfNonAbundantSumsBelow = (limit) => {
  const abundantNums = getAbundantNumbersBelow(limit)

  // todo -- something wrong with this function...once get working will optimize slightly
  // const highestNonAbundantSum = findHighestNonAbundantSumBelow(limit, abundantNums)

  let i = 0
  let sum = 0

  while (i < limit) {
    if (!isSumOfAbundantNumbers(i, abundantNums)) { sum += i }

    i++
  }

  return sum
}

module.exports = {
  getAbundantNumbersBelow,
  isSumOfAbundantNumbers,
  findHighestNonAbundantSumBelow,
  getSumOfNonAbundantSumsBelow
}
// console.log(isAbundantNumber(28144))
