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
const names = fs.readFileSync(path.join(__dirname, 'files/names.txt'), 'utf8').replace(/"|\n/g, '').split(',')
const sortByCharCode = (level) => (a, b) => a.charCodeAt(level) - b.charCodeAt(level)
// PASS THROUGH ARRAY MULTIPLE TIMES
//
//
// 1. [aaron, [blake, ben], [chelsea, chrissy, courtney, charissa], [jonah, jon], xamarin]
// 2. [arron, ben, blake, [chelsea, chrissy, charissa], courtney, [jonah, jon], xamarin]
// 3. [aaron, ben, black, charissa, chelsea, chrissy, courntey, [jonah, jon], xamarin]

const groupNames = (names, level = 0) => {
  let num = 0
  const grouped = names.reduce((acc, name) => {
    const prevIndex = acc.length - 1
    const prev = acc[prevIndex]
    const prevIsArray = isArray(prev)

    if (prev) {
      if (prevIsArray && name.charCodeAt(level) === prev[0].charCodeAt(level)) {
        acc[prevIndex].push(name)
        return acc
      }

      if (!prevIsArray && name.charCodeAt(level) === prev.charCodeAt(level)) {
        num++
        acc[prevIndex] = [prev, name]
        return acc
      }
    }

    return acc.concat([name])
  }, [])

  return { num, names: grouped }
}

const sortNames = (names, level = 0) => {
  let nextLevel = level + 1
  let i = 0
  let nested = 0

  do {
    while (i < names.length) {
      // Sort any sub arrays by the current level
      if (isArray(names[i])) {
        const sorted = names[i].sort(sortByCharCode(nextLevel))
        const grouped = groupNames(sorted, nextLevel)

        nested += grouped.num
        names = names.slice(0, i).concat([...grouped.names]).concat(names.slice(i + 1))
      }

      // if (i === names.length) {
      //   console.log('in here')
      // }

      i++
    }
  } while (nested > 0)

  return { names, nested }
}

const grouped = groupNames(names.sort(sortByCharCode(0))).names
console.log(sortNames(grouped.slice(0, 1)))
