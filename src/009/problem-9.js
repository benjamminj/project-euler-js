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

const findPythagTrip = sum => {
  let a = 3

  const getBValue = a => {
    const halfRem = sum - a
    return halfRem % 1 === 0 ? halfRem - 1 : Math.floor(halfRem)
  }
  const getCValue = (a, b) => sum - a - b

  let b = getBValue(a)
  let c = getCValue(a, b)

  let triplet = null
  while (!triplet) {
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

const getTripleProductWithSumOf = num =>
  getTripleProduct(findPythagTrip(num))

module.exports = getTripleProductWithSumOf
