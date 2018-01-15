// #19 -- Counting Sundays
// https://projecteuler.net/problem=19

const getFebLength = year => {
  if (year % 100 === 0) {
    return year % 400 === 0 ? 29 : 28
  }

  return year % 4 === 0 ? 29 : 28
}

const getMonths = year => [31, getFebLength(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const getSundaysOnFirstOfMonth = (year, displacement) => {
  let numSundays = 0

  for (var i in year) {
    if (displacement === 0) numSundays++

    displacement += (year[i] % 7)

    if (displacement >= 7) displacement %= 7
  }

  return { numSundays, displacement }
}

// Assumes the start time is after 1900
const getSundaysInTwentiethCentury = () => {
  // 1900 was not a leap year & first day of 1900 was a Monday (index 1)
  let displacement = 1 + (365 % 7)
  let numSundays = 0

  for (var i = 1901; i <= 2000; i++) {
    const year = getSundaysOnFirstOfMonth(getMonths(i), displacement)
    displacement = year.displacement
    numSundays += year.numSundays
  }

  return numSundays
}

module.exports = getSundaysInTwentiethCentury
