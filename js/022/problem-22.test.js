const fs = require('fs')
const path = require('path')

const getSumOfNameScores = require('./problem-22')

// Get an array of all the names
const NAMES = fs
  .readFileSync(path.join(__dirname, '../../files/names.txt'), 'utf8')
  .replace(/"|\n/g, '')
  .split(',')

test('sum of name scores', () => {
  expect(getSumOfNameScores(NAMES)).toBe(871198282)
})
