/**
 * Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.
 */

const convertNums = arr => arr.map(num => {
  const numWithoutExp = num.toExponential().split('e+')[0]

  return parseFloat(numWithoutExp)
})


const getNDigitsOfSum = (n, numbers) => {
  const sum = convertNums(numbers).reduce((acc, num) => acc + num)
  const firstTenDigits = sum.toString().replace('.', '').slice(0, 10)

  return Number(firstTenDigits)
}

module.exports = getNDigitsOfSum
