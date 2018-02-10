let rec calcSumOfMults =
        (~sum: int, ~index: int, ~limit: int, ~mult1: int, ~mult2: int) =>
  if (index === limit) {
    sum;
  } else {
    let isMultiple = index mod mult1 == 0 || index mod mult2 == 0;
    let sum = isMultiple ? sum + 1 : sum;
    calcSumOfMults(~sum, ~index, ~limit, ~mult1, ~mult2);
  };
