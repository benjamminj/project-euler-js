/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
 * that the 6th prime is 13.
 *
 * What is the 10 001st prime number?
 */

function getNthPrime (n) {
  // start on the second prime so can increment by odd nums
  let i = 2
  let prime = 3
  let num = 3

  while (i <= n) {
    if (isPrime(num)) {
      prime = num
      i++
    }

    num += 2
  }

  return prime
}

function isPrime (num) {
  let divisor = Math.floor(Math.sqrt(num))

  for (divisor; divisor > 1; divisor--) {
    if (num % divisor === 0) {
      return false
    }
  }

  return true
}

// ✓ Solved: 104743
console.log(getNthPrime(10001))
