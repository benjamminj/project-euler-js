/**
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 *  Find the sum of all the primes below two million.
 */
const trampoline = fn => (...args) => {
  let result = fn(...args)

  while (typeof result === 'function') {
    result = result()
  }

  return result
}

const getPrimesBelowRec = (limit, i = 9, primes = [2, 3, 5, 7]) => {
  if (limit <= i) {
    return isPrime(i) ? [...primes, i] : primes
  }

  return isPrime(i)
    ? () => getPrimesBelowRec(limit, i + 2, [...primes, i])
    : () => getPrimesBelowRec(limit, i + 2, primes)
}
const getPrimesBelow = trampoline(getPrimesBelowRec)

const isPrimeRec = (num, divisor = 5) => {
  if (num === 2 || num === 3 || num === 5 || num === 7) {
    return true
  }

  if (num % 2 === 0) return false
  if (num % 3 === 0) return false
  if (num % 5 === 0) return false

  if (num % divisor === 0) return false
  if (num % (divisor + 2) === 0) return false
  if (num % (divisor + 4) === 0) return false
  // todo -- figure out case where we can loop through potential Divisors

  return divisor <= Math.sqrt(num)
    ? () => isPrimeRec(num, divisor + 6)
    : true
}
const isPrime = trampoline(isPrimeRec)

const primesBelow200 = getPrimesBelow(100)
// default the sum at 2 to allow incrementing by odd numbers
const sumOfPrimesRec = (limit, current = 3, sum = 2) =>
  current > limit
    ? sum
    : isPrime(current)
      ? () => sumOfPrimesRec(limit, current + 2, sum + current)
      : () => sumOfPrimesRec(limit, current + 2, sum)

const sumOfPrimes = trampoline(sumOfPrimesRec)

module.exports.sumOfPrimes = sumOfPrimes
module.exports.getPrimesBelow = getPrimesBelow
