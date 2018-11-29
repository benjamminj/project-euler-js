/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143?
 */

const getLargestPrimeFactor = (num, divisor = 2, largestFactor = num) => {
  const isDivisible = num % divisor === 0
  const nextNum = isDivisible ? num / divisor : num
  const nextDiv = isDivisible
    ? divisor
    : divisor === 2
      ? divisor + 1
      : divisor + 2
  const nextLargestFactor = isDivisible ? divisor : largestFactor

  return num < 2
    ? largestFactor
    : getLargestPrimeFactor(nextNum, nextDiv, nextLargestFactor)
}

module.exports = getLargestPrimeFactor
