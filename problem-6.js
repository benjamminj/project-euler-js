/**
 * The sum of the squares of the first ten natural numbers is,
 *
 * 12 + 22 + ... + 102 = 385
 * The square of the sum of the first ten natural numbers is,
 *
 * (1 + 2 + ... + 10)2 = 552 = 3025
 * Hence the difference between the sum of the squares of the first ten natural
 * numbers and the square of the sum is 3025 − 385 = 2640.
 *
 * Find the difference between the sum of the squares of the first one hundred
 * natural numbers and the square of the sum.
 */

function sumSquareDifference (max) {
  let sum = 0
  let squaresSum = 0

  for (let i = 1; i <= max; i++) {
    sum += i
    squaresSum += i ** 2
  }

  return (sum **= 2) - squaresSum
}

// ✓ Solved: 25164150
console.log(sumSquareDifference(100))
