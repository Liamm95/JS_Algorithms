const getNOD = (first, second) => {
  if (typeof first !== "number" || typeof second !== "number") {
    throw new Error("Передаваемые данные должны быть числами");
  }

  if (first < 0 || second < 0) {
    throw new Error("Числа должны быть неотрицательными");
  }

  if (second === 0) {
    return first;
  } else {
    return getNOD(second, first % second);
  }
};

try {
  console.log(getNOD(3, 6));
  console.log(getNOD(0, 2));
  console.log(getNOD(5, 5));
  console.log(getNOD(1, 3));
  console.log(getNOD(0, 0));
} catch (error) {
  console.error(`Ошибка: ${error.message}`);
}
