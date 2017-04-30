/**
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 *  Find the sum of all the primes below two million.
 */

const isPrime = num => {
  if (num === 2 || num === 3) return true
  if (num % 2 === 0) return false

  let divisor = 3
  do {
    if (num % divisor === 0) return false
    divisor += 2
  } while (divisor <= Math.sqrt(num))

  return true
}

const sumOfPrimes = limit => {
  let sum = 2 // include the first prime so we can increment by odds

  for (let i = 3; i <= limit; i += 2) {
    if (isPrime(i)) sum += i
  }

  return sum
}

// ✔ Solved: 142913828922
console.log(sumOfPrimes(2e6))
