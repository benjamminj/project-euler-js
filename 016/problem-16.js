// Power digit sum
// 2 ** 15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 2 ** 1000?

const multiplyArr = (arr, amt) => {
  const carriedAmts = []
  const multiplied = arr.map((el, i) => {
    const groupLimit = 1e12
    const product = el * amt

    if (product > groupLimit - 1) {
      // Carry the 1 over into the next group of millions
      carriedAmts.push(i + 1)
      return product - groupLimit
    }

    return product
  })

  // Loop back through carried millions and add them to respective groups
  carriedAmts.forEach(index => {
    multiplied[index] = multiplied[index] + 1 || 1
  })
  return multiplied
}

const largeExponent = (base, pow) => {
  let products = [1]

  for (let i = 0; i < pow; i++) {
    products = multiplyArr(products, base)
  }

  return products
}

const sumOfDigits = exponentArr => {
  const sum = exponentArr.map(digitGroup => {
    const digits = digitGroup.toString().split('')
    return digits.reduce((acc, digit) => parseInt(acc) + parseInt(digit))
  })

  return sum.reduce((acc, partialSum) => acc + partialSum)
}

const getPowerDigitSum = (rootNum, exponent) =>
  sumOfDigits(largeExponent(rootNum, exponent))

module.exports = getPowerDigitSum
