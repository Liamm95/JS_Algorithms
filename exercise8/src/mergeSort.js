const mergeSort = (arrayOfNumbers) => {
  if (!Array.isArray(arrayOfNumbers)) {
    throw new Error("Аргумент должен быть массивом");
  }

  if (!arrayOfNumbers.every((n) => typeof n === "number")) {
    throw new Error("В массиве должны передаваться только числа");
  }

  if (arrayOfNumbers.length <= 1) {
    return arrayOfNumbers;
  }

  const mid = Math.floor(arrayOfNumbers.length / 2);
  const left = arrayOfNumbers.slice(0, mid);
  const right = arrayOfNumbers.slice(mid);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  const result = merge(sortedLeft, sortedRight);

  return result;
};

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  result = result.concat(left.slice(leftIndex));
  result = result.concat(right.slice(rightIndex));

  return result;
}

try {
  console.log(mergeSort([38, 27, 43, 3, 9, 82]));
  console.log(mergeSort([13, 45, 2, 11, 23, 17]));
  console.log(mergeSort([90, 24, 15, 2, 7, 40]));
} catch (error) {
  console.log(`Ошибка: ${error.message}`);
}
