// A perfect number is a number for which the sum of its proper divisors is
// exactly equal to the number. For example, the sum of the proper divisors of
// 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
//
// A number n is called deficient if the sum of its proper divisors is less than
// n and it is called abundant if this sum exceeds n.
//
// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest
// number that can be written as the sum of two abundant numbers is 24. By
// mathematical analysis, it can be shown that all integers greater than 28123
// can be written as the sum of two abundant numbers. However, this upper limit
// cannot be reduced any further by analysis even though it is known that the
// greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.
//
// Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

const getDivisors = (num) => {
  let divisors = []
  let i = 0

  while (i <= (num / 2)) {
    let rem = num % i

    if (rem === 0) divisors.push(i)

    i++
  }

  return divisors
}

const isAbundantNumber = (num) => {
  return getDivisors(num).reduce((sum, div) => sum + div, 0) > num
}

// loop downwards
// for each number look for abundant numbers in numbers below 1/2
// for each abundant number, look to see if the complementary addend is also abundant

// if something found go to the next number
// if the number being searched is the 1/2 and it still isn't abundant, add it to the list of numbers

const isSumOfAbundantNumbers = (num) => {
  let i = 0

  while (i <= (num / 2)) {
    let isAbundantAddend = isAbundantNumber(i)

    if (isAbundantAddend && isAbundant(num - i)) {
      return true
    }

    i++
  }

  return false
}

const findNonAbundantSums = (num, sums = [], limit) => {
  // is the number an abundant sum?
  // if not, add to the array of sums
  // if so try the next number
  // if the number is the limit return the sums
}

console.log(isAbundantNumber(28144))

