// Problem 22 -- Name Scores
// https://projecteuler.net/problem=22
const fs = require('fs')
const path = require('path')
const { isArray } = Array

// Get an array of all the names
const NAMES = fs.readFileSync(path.join(__dirname, 'files/names.txt'), 'utf8').replace(/"|\n/g, '').split(',')

function transformNames (names) {
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

// ✔ Solved: 871198282
console.log(transformNames(NAMES))

