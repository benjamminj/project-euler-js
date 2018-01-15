/**
 * 2520 is the smallest number that can be divided by each of the numbers from
 * 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the
 * numbers from 1 to 20?
 */

const testIfMultiple = (min, max, num) => {
  for (let i = min; i <= max; i++) {
    if (num % i !== 0) {
      return false
    }
  }

  return num
}

const smallestMultiple = (min, max) => {
  let found = false
  let i = max

  while (!found) {
    found = testIfMultiple(min, max, i)
    i += max
  }

  return found
}

module.exports = smallestMultiple
