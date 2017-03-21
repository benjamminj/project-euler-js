/**
 * A palindromic number reads the same both ways. The largest palindrome made
 * from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

function generatePalindrome (num) {
  const numString = num.toString()
  const firstHalf = numString.slice(0, numString[numString.length / 2]).split('')

  return parseInt(firstHalf.concat(firstHalf.slice().reverse()).join(''))
}

function getPalin () {
  // Loop through all possible palindromes
  for (let i = 997; i > 99; i--) {
    let palin = generatePalindrome(i)

    // Loop through all possible factors of the given palindrome
    for (let j = Math.floor(Math.sqrt(palin)); j > 99; j--) {
      // If the factors are 3-digit & palindrome is divisible by factors,
      // then this is the largest palindrome product.
      if (j < 999 && (palin / j) < 1000 && palin % j === 0) {
        return palin
      }
    }
  }
}

// ✔ Solved: prints 906609
console.log(getPalin())
