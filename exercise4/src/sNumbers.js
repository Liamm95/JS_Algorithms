const getSimpleNumbers = (touple) => {
  if (!Array.isArray(touple)) {
    throw new Error("Аргумент должен быть массивом (кортежем)");
  }

  if (touple.length !== 2) {
    throw new Error("Кортеж должен содержать ровно 2 элемента");
  }

  if (typeof touple[0] !== "number" || typeof touple[1] !== "number") {
    throw new Error("Оба элемента кортежа должны быть числами");
  }

  if (touple[0] < 2 || touple[1] < 2) {
    throw new Error("Оба числа должны быть не меньше 2");
  }

  if (touple[0] > touple[1]) {
    throw new Error("Начало диапазона не может быть больше конца диапазона");
  }

  const result = [];
  const [start, end] = touple;

  for (let i = start; i <= end; i++) {
    if (isSimple(i)) {
      result.push(i);
    }
  }
  return result;
};

function isSimple(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

try {
  console.log(getSimpleNumbers([2, 10]));
  console.log(getSimpleNumbers([2, 2]));
} catch (error) {
  console.log(`Ошибка: ${error.message}`);
}
