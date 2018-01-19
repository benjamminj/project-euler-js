// Problem 22 -- Name Scores
// https://projecteuler.net/problem=22
const { isArray } = Array

function getSumOfNameScores (names) {
  return names.sort()
    .map(transformNameToValue)
    .reduce((sum, nameValue) => sum + nameValue, 0)
}

function transformNameToValue (name, i) {
  const nameValue = name.split('')
    .map(letter => letter.charCodeAt(0) - 64)
    .reduce((sum, letterValue) => (sum + letterValue), 0)

  return nameValue * (i + 1)
}

module.exports = getSumOfNameScores

// ✔ Solved: 871198282
// console.log(transformNames(NAMES))

