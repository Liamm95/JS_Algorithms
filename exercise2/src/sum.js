const getNumbersIdBySum = (arrayOfNumbers, sum) => {
  if (
    !arrayOfNumbers.every(
      (num) => typeof num === "number" && Number.isInteger(num) && num >= 0
    )
  ) {
    throw new Error("Массив должен содержать только целые натуральные числа");
  }

  if (typeof sum !== "number" || !Number.isInteger(sum)) {
    throw new Error("Второй аргумент должен быть целым числом");
  }

  if (sum < 0) {
    throw new Error("Сумма должна быть положительным числом");
  }

  let result = [];
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    for (let j = i + 1; j < arrayOfNumbers.length; j++) {
      if (arrayOfNumbers[i] + arrayOfNumbers[j] === sum) {
        result.push([i, j]);
      }
    }
  }
  return result.length > 0 ? result : null;
};

try {
  console.log(getNumbersIdBySum([1, 2, 3, 4, 5], 6));
  console.log(getNumbersIdBySum([1, 0, 5], 2));
  console.log(getNumbersIdBySum([1, 0], 1));
  console.log(getNumbersIdBySum([1, 2, 3, 4, 5], 0));
  console.log(getNumbersIdBySum([-1, 2], 2));
} catch (error) {
  console.error(`Ошибка: ${error.message}`);
}
