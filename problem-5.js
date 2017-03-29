/**
 * 2520 is the smallest number that can be divided by each of the numbers from
 * 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the
 * numbers from 1 to 20?
 */

var ops = 0

function testIfMultiple (min, max, num) {
  for (let i = min; i <= max; i++) {
    ops++
    if (num % i !== 0) {
      return false
    }
  }

  ops++
  return num
}

function smallestMultiple (min, max) {
  let found = false
  let i = max

  while (!found) {
    found = testIfMultiple(min, max, i)
    ops++
    i += max
  }

  ops++
  return found
}

// ✓ Solved: 232792560
console.log(smallestMultiple(1, 20))
console.log(ops)
