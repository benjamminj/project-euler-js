// Lattice paths
// How many paths possible through a 20x20 grid, traveling only left & down?

const factorial = num => {
  let product = 1
  for (let i = num; i > 0; i--) {
    product *= i
    console.log(i, product)
  }
  return product
}

const getNumPaths = size => {
  const numSteps = size * 2

  // Have to do Math.floor because JS doesn't handle large numbers with 100% accuracy.
  // Otherwise you will get a decimal past `size = 13`.
  return Math.floor(factorial(numSteps) / (factorial(size) ** 2))
}

// ✔ Solved: 137846528820
console.log(getNumPaths(20))
