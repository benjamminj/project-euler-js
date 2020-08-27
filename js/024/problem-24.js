// A permutation is an ordered arrangement of objects.
// For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4.
// If all of the permutations are listed numerically or alphabetically, we call it lexicographic order.
// The lexicographic permutations of 0, 1 and 2 are:

// 012   021   102   120   201   210

// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?\

function factorial(number, product = 1) {
  if (number <= 1) return product

  return factorial(number - 1, number * product)
}

// Step 1.
// find out how many permutations per digit there are. Since lexicographic order will
// largely be dependent on the number of digits, we might be able to save a lot of time
// by skipping to the DIGIT where the millionth permutation happens.

/**
 * @param {number} numberOfDigits
 */
function getNumberOfPermutationsPerDigit(numberOfDigits) {
  return factorial(numberOfDigits - 1)
}

module.exports.getNumberOfPermutationsPerDigit = getNumberOfPermutationsPerDigit

// Step 1.5 Find WHICH digit has the millionth factorial
function findNthPermutationDigit(n, numberOfDigits) {
  let numberOfPermutationsPerDigit = getNumberOfPermutationsPerDigit(
    numberOfDigits
  )

  let digit = Math.ceil(n / numberOfPermutationsPerDigit)

  return digit
}

module.exports.findNthPermutationDigit = findNthPermutationDigit

// Step 2.
// List all available permutations for the given digit.
// Perhaps insert into a Set to make the lookup faster?

// Step 3.
// Look up the darn digit!

/**
 * @param {number} n
 * @param {number[]} digits
 */
function findNthLexicographicPermutation(n, digits) {
  // Makes a map of the digits to make looking up digits a little faster
  let digitsClone = [...digits]
  let permutation = []
  let numberLeftToGo = n

  while (numberLeftToGo > 0) {
    let permutationsPerDigit = getNumberOfPermutationsPerDigit(
      digitsClone.length
    )

    // TODO: fix here?
    let digitIndexContainingNthPermutation =
      findNthPermutationDigit(numberLeftToGo, digits.length) - 1

    const nextDigit = digitsClone[digitIndexContainingNthPermutation]

    console.log(digitIndexContainingNthPermutation, n)
    permutation.push(nextDigit)
    digitsClone.splice(digitIndexContainingNthPermutation, 1)
    numberLeftToGo = numberLeftToGo - permutationsPerDigit
  }

  return parseInt(permutation.join(''))
}

module.exports.findNthLexicographicPermutation = findNthLexicographicPermutation
