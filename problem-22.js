// Problem 22 -- Name Scores
// https://projecteuler.net/problem=22

/**
 * Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.
 *
 * For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.
 *
 * What is the total of all the name scores in the file?
 */

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

console.log(transformNames(NAMES))

