const alphabetMap = (rawString, mapCount) => {
  if (typeof rawString !== "string") {
    throw new Error("Первый аргумент должен быть строкой");
  }

  if (mapCount < 0) {
    throw new Error("Второй агрумент может быть только неотрицательным числом");
  }

  const ceaser_code = {
    a: "def",
    b: "efc",
    c: "abe",
    d: "cba",
    e: "fba",
    f: "dcb",
  };

  let result = rawString;

  for (let i = 0; i < mapCount; i++) {
    let current = "";
    for (let char of result) {
      current += ceaser_code[char] || char;
    }
    result = current;
  }

  return result;
};

try {
  console.log(alphabetMap("abcdef", 1));
  console.log(alphabetMap("aa", 2));
  console.log(alphabetMap("bad", 1));
  console.log(alphabetMap("sd", -1));
} catch (error) {
  console.log(`Ошибка: ${error.message}`);
}
