const sma = (arrayOfNumbers, period) => {
  if (!Array.isArray(arrayOfNumbers)) {
    throw new Error("Первый аргумент должен быть массивом");
  }

  if (period <= 0) {
    throw new Error("Период должен быть положительным числом.");
  }

  if (!arrayOfNumbers.every((n) => typeof n === "number" && n >= 0)) {
    throw new Error("Массив должен содержать целые неотрицательные числа.");
  }

  const result = [];

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    let sum = 0;

    for (let j = Math.max(0, i - period + 1); j <= i; j++) {
      sum += arrayOfNumbers[j];
    }

    result.push(Number((sum / period).toFixed(3)));
  }

  return result;
};

try {
  console.log(sma([1, 2, 3], 3));
  console.log(sma([1, 2, 3], 1));
  console.log(sma([1, 2, 3], 2));
} catch (error) {
  console.log(`Ошибка: ${error.message}`);
}
