const multLargeNumber = (numArray, mult) => {
  let carriedIndexes = []
  const breakpoint = 1e12

  const products = numArray.map((group, i) => {
    let product = group * mult
    if (product >= breakpoint) {
      carriedIndexes.push({ i, val: Math.floor(product / breakpoint) })
      return product % breakpoint
    }

    return product
  })

  carriedIndexes.forEach(({ i, val }) => {
    products[i + 1] = products[i + 1] + val || val
  })

  return products
}

const factorial = (num, productArr = [1]) => {
  if (num === 1) return productArr
  const newProductArr = multLargeNumber(productArr, num)
  return factorial(num - 1, newProductArr)
}

const getSum = (sum, digit) => sum + Number(digit)
const getSumOfDigits = numArr =>
  numArr.map(num =>
    num.toString().split('').reduce(getSum, 0)
  ).reduce(getSum, 0)

const getSumOfFactorialDigits = num => getSumOfDigits(factorial(num))

module.exports = getSumOfFactorialDigits
