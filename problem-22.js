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
const TEST_NAMES = ['BEN', 'BRODY', 'BRANDON', 'CARLY', 'KYLE', 'RON', 'RALPH']

const sortByLevel = (names, level = 0) => names.sort((a, b) => a.charCodeAt(level) - b.charCodeAt(level))

const DUPLICATES = []
count = 0
const groupNames = (names, level = 0) => {
  return names.reduce((acc, name) => {
    const letter = name[level]

    // what happens if rem = '' and there are names in acc[letter]? will it overwrite?
    const rem = name.slice(1)
    const val = rem ? (acc[letter] || []).concat(name.slice(1)) : null
    acc[letter] = val


    if (acc[letter] && acc[letter].includes(name)) {
      console.log('------------------- DUPLICATE', names, name);
      count++
    }
    return acc
  }, {})
}

const groupNested = (namesObj) => {
  const groups = Object.entries(namesObj)

  // recursively deconstruct names into a "syntax tree" of sorts
  groups.forEach(letterGroup => {
    const head = letterGroup[0]
    const tail = letterGroup[1]

    if (namesObj[head]) {
      namesObj[head] = groupNested(groupNames(namesObj[head]))
    }
  })

  return namesObj
}

const flattenNested = (namesObj) => {
  const groups = Object.entries(namesObj)
  const sorted = groups.sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0))

  // console.log('---', sorted)
  return sorted.reduce((acc, group) => {
    const head = group[0]
    const tail = group[1]
    // console.log('------------------- ', head, tail);
    let val
    if (tail) {
      const nested = flattenNested(tail)
      val = nested.map(str => `${head}${str}`)
    } else {
      val = head
    }

    // console.log('- ', [...val]);
    return acc.concat([...val])
  }, [])
}

const transformToNumbers = (namesArr) => {
  return namesArr.map((name, i) => {
    // console.log('------------------- NAME', name.split(''));
    const nameValues = name.split('').reduce((sum, letter) => {
      // console.log('------------------- SUM ', sum);
      // console.log('------------------- LETTER ', letter, letter.charCodeAt(0));
      // console.log('------------------- SUM', sum);
      return sum + (letter.charCodeAt(0) - 65)
    }, 0)
    // console.log('------------------- ', nameValues);
    return nameValues * (i + 1)
  })
}

const getListTotal = (list) => list.reduce((sum, num) => {
  // console.log('--------------- SUM', sum)
  return sum + num
}, 0)

const namesObj = groupNested(groupNames(NAMES))
const sortedNames = flattenNested(namesObj)
const nameValues = transformToNumbers(sortedNames)
console.log('------------------- COUNT', count);
// console.log('------------------- ', sortedNames.length === NAMES.length);
// console.log('------------------- ', NAMES.filter(name => name.charAt(0) === 'A').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)));
