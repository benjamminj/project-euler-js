/**
 * If the numbers 1 to 5 are written out in words:
 * one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 *
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words,
 * how many letters would be used?
 *
 * NOTE: Do not count spaces or hyphens.
 * For example, 342 (three hundred and forty-two) contains 23 letters
 * and 115 (one hundred and fifteen) contains 20 letters.
 * The use of "and" when writing out numbers is in compliance with British usage
 */

const belowTwenty = [
  '',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen'
]

const tensAboveTwenty = [
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety'
]

const lettersUnderOneHundred = () => {
  const sumOfTen = belowTwenty.slice(0, 9).join('').length
  const sumOfLettersUnderTwenty = belowTwenty.join('').length

  let sum = sumOfLettersUnderTwenty

  for (let i = 20; i <= 99; i++) {
    const onesPlace = belowTwenty[i % 10]
    const tensPlace = tensAboveTwenty[Math.floor(i / 10 - 2)]
    sum += (tensPlace + onesPlace).length
  }

  return sum
}

const getLettersUnderHundred = numHundreds => {
  const numLettersUnderHundred = lettersUnderOneHundred()

  let sum = numLettersUnderHundred

  for (let i = 1; i < numHundreds; i++) {
    const baseHundred = belowTwenty[i] + 'hundred'
    const hundredsPlace = baseHundred + 'and'
    const hundredsLetters = hundredsPlace.length * 99

    sum += baseHundred.length + hundredsLetters + numLettersUnderHundred
  }

  return sum
}

const getLettersUnderOneThousand = () =>
  'onethousand'.length + getLettersUnderHundred(10)

module.exports = getLettersUnderOneThousand
