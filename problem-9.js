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
 * NOTE -- This function uses a recursive tail call, which as of Node 7.9.0 is only
 * supported using the `--harmony` & `--use-strict` flags.
 */
const findPythagTrip = (sum, a = 3, b) => {
  const remainder = sum - a
  const half = remainder / 2

  b = b || (half % 1 === 0 ? half - 1 : Math.floor(half))
  const c = sum - a - b

  if (isPythagTrip(a, b, c)) return { a, b, c }

  if (a < b - 1) {
    return findPythagTrip(sum, a, b - 1)
  }

  return findPythagTrip(sum, a + 1)
}

const getTripleProduct = ({ a, b, c }) => a * b * c

// ✓ Solved: 31875000
const answer = getTripleProduct(findPythagTrip(1000))
console.log(answer)
