const getMaxZeroCount = (raw) => {
  if (typeof raw !== "string") {
    throw new Error("Аргумент должен быть строкой");
  }

  for (let i = 0; i < raw.length; i++) {
    if (raw[i] !== "1" && raw[i] !== "0") {
      throw new Error("В строке должны быть только единицы и нули");
    }
  }

  let count = 0;
  let current = 0;

  for (let i = 0; i < raw.length; i++) {
    if (raw[i] == "0") {
      current++;
    } else {
      if (current > count) {
        count = current;
      }
      current = 0;
    }
  }

  if (current > count) {
    count = current;
  }

  return count;
};

try {
  console.log(getMaxZeroCount("1010010001"));
  console.log(getMaxZeroCount("100100100"));
  console.log(getMaxZeroCount("11111"));
} catch (error) {
  console.log(`Ошибка: ${error.message}`);
}
