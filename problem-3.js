/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143?
 */

const number = 600851475143

function largestPrimeFactor (num) {
  const factors = []
  let divisor = 2

  while (num > 2) {
    if (num % divisor === 0) {
      factors.push(divisor)
      num /= divisor
    } else if (divisor === 2) {
      divisor ++
    } else {
      divisor += 2
    }
  }

  return factors[factors.length - 1]
}

console.log(largestPrimeFactor(number))
