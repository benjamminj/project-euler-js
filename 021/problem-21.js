// Problem 21 -- Amicable Numbers
// https://projecteuler.net/problem=21

const getProperDivisorsSum = num => {
  let sum = 0

  for (let i = 1; i <= (num / 2); i++) {
    if (num % i === 0) sum += i
  }

  return sum
}

const getAmicableNumbersSum = max => {
  let sumAmicable = 0
  for (var i = max; i > 0; i--) {
    const sum = getProperDivisorsSum(i)
    if (sum > max) continue
    if (getProperDivisorsSum(sum) === i && sum !== i) sumAmicable += i
  }

  return sumAmicable
}

module.exports = getAmicableNumbersSum
