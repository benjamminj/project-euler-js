/**
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for
 * which,
 *
 * a^2 + b^2 = c^2
 * For example, 32 + 42 = 9 + 16 = 25 = 52.
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 *
 */

const isPythagTrip = (a, b, c) => c ** 2 === a ** 2 + b ** 2

/**
 * Assumes that there actually is a Pythagorean triplet to be found within the sum
 *
 * NOTE: This function uses a recursive tail call, which as of Node 7.9.0 is only
 * supported using the `--harmony` & `--use-strict` flags.
 */
const findPythagTripRecursive = (sum, a = 3, b) => {
  const halfRem = (sum - a) / 2

  b = b || (halfRem % 1 === 0 ? halfRem - 1 : Math.floor(halfRem))
  const c = sum - a - b

  if (isPythagTrip(a, b, c)) return { a, b, c }

  if (a < b - 1) {
    return findPythagTripRecursive(sum, a, b - 1)
  }

  return findPythagTripRecursive(sum, a + 1)
}

/**
 *
 * This is the exact same algorithm, only implemented using loops rather than recursion.
 * This mean that it can be run on Node without any flags.
 */
const findPythagTripLoop = sum => {
  let a = 3

  const getBValue = a => {
    const halfRem = sum - a
    return halfRem % 1 === 0 ? halfRem - 1 : Math.floor(halfRem)
  }
  const getCValue = (a, b) => sum - a - b
  let b = getBValue(a)
  let c = getCValue(a, b)

  console.log(a, b, c)
  let triplet = null
  while (!triplet) {
    console.log('in loop')
    if (isPythagTrip(a, b, c)) {
      triplet = { a, b, c }
    } else if (a < b - 1) {
      b--
      c++
    } else {
      ++a
      b = getBValue(a)
      c = getCValue(a, b)
    }
  }
  return triplet
}

const getTripleProduct = ({ a, b, c }) => a * b * c

// ✓ Solved: 31875000
const answer = getTripleProduct(findPythagTripLoop(1000))
console.log(answer)
