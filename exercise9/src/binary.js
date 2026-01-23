const binarySearch = (arrayOfNumbers, num) => {
  if (!Array.isArray(arrayOfNumbers)) {
    throw new Error("Первый аргумент должен быть массивом");
  }

  if (!arrayOfNumbers.every((n) => typeof n === "number")) {
    throw new Error("В массиве должны передаваться только числа");
  }

  if (typeof num !== "number") {
    throw new Error("Второй аргумент должен быть числом");
  }

  let left = 0;
  let right = arrayOfNumbers.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = arrayOfNumbers[mid];

    if (midValue === num) {
      return mid;
    } else if (midValue < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

try {
  console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));
  console.log(binarySearch([2, 4, 6, 8, 10], 8));
  console.log(binarySearch([-10, -5, 0, 5, 10], 0));
} catch (error) {
  console.log(`Ошибка: ${error.message}`);
}
