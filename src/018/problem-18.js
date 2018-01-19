// Maximum path sum 1
// https://projecteuler.net/problem=18

const maxTotal = triangle => {
  const penultimateRow = triangle[triangle.length - 2]
  const lastRow = triangle[triangle.length - 1]

  if (triangle.length === 1) return triangle[0][0]

  const newLastRow = penultimateRow.map((num, i) => {
    const greaterAddend = lastRow[i] > lastRow[i + 1] ? lastRow[i] : lastRow[i + 1]
    return num + (greaterAddend)
  })

  return maxTotal(triangle.slice(0, triangle.length - 2).concat([newLastRow]))
}

module.exports = maxTotal
