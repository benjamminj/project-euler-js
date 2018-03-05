// create an array of values from `a` to `b`
// can optionally map over numbers for creating custom ranges
module.exports.range = (a, b, mapperFn = (_, i) => a + i) => (
  Array.from({ length: Math.abs(Math.ceil(b - a)) + 1 }, mapperFn)
)

module.exports.filterReduce = (filterFn, reduceFn, initialValue, arr) => (
  arr.reduce((acc, el, i) => (
    filterFn(el, i, arr)
      ? reduceFn(acc, el, i)
      : acc
  ), initialValue)
)
