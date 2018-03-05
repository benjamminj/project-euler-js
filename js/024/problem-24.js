// A permutation is an ordered arrangement of objects.
// For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4.
// If all of the permutations are listed numerically or alphabetically, we call it lexicographic order.
// The lexicographic permutations of 0, 1 and 2 are:

// 012   021   102   120   201   210

// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?\

// todo -- move to a utils lib
const range = (a, b) =>
  Array.from({ length: Math.floor(b - a) - 1 }, (_, i) => a + i)

const factorial = n => range(1,n).reduce((product, i) => product * i, 1)

const findNumOfPerms = numDigits

const findNthLexicographicPerm = ({
  n,
  digits,
  num = [],
  permsCalculated = 0
}) => {

}


// 01
// 10

// 012
// 021
// 102
// 120
// 201
// 210

// 4 digits
// 0 123
// 0 132
// 0 213
// 0 231
// 0 312
// 0 321

// 1 023
// 1 032
// 1 203
// 1 230
// 1 302
// 1 320

// 2 013
// 2 031
// 2 103
// 2 130
// 2 301
// 2 310

// 3 012
// 3 021
// 3 102
// 3 120
// 3 201
// 3 210

// perm -- returns the number of possible permutations given the amount of digits
// implementation --> factorial of the number of digits - 1
// perm(4) = 6 (6 possible digits for each group of permutations.)
// use to narrow down WHERE the millionth digit is in order...if you only have 2000 digits you can skip all the 0s, 1s, etc.
