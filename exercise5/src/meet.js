const dayStart = "07:30"; // начало дня
const dayEnd = "17:45"; // конец дня

const scheduleMeeting = (startTime, durationMinutes) => {
  if (typeof startTime !== "string") {
    throw new Error("Аргумент должен быть строкой");
  }

  if (durationMinutes < 0) {
    throw new Error("Второй аргумент должен быть неотрицательным числом");
  }

  const startHours = Number(dayStart.slice(0, 2));
  const startMinutes = Number(dayStart.slice(3));

  const endHours = Number(dayEnd.slice(0, 2));
  const endMinutes = Number(dayEnd.slice(3));

  let hours = Number(startTime.slice(0, 2));
  let minutes = Number(startTime.slice(3));

  if (hours < 0 || hours >= 24 || minutes < 0 || minutes >= 60) {
    throw new Error("Некорректное время");
  }

  if (
    hours < startHours ||
    (hours === startHours && minutes < startMinutes) ||
    hours > endHours ||
    (hours === endHours && minutes > endMinutes)
  ) {
    return false;
  }

  minutes += durationMinutes;
  if (minutes >= 60) {
    hours += 1;
    minutes -= 60;
  }

  if (
    hours < startHours ||
    (hours === startHours && minutes < startMinutes) ||
    hours > endHours ||
    (hours === endHours && minutes > endMinutes)
  ) {
    return false;
  }

  return true;
};

try {
  console.log(scheduleMeeting("07:30", 15));
  console.log(scheduleMeeting("07:15", 30));
  console.log(scheduleMeeting("7:30", 30));
  console.log(scheduleMeeting("11:30", 60));
  console.log(scheduleMeeting("17:00", 45));
  console.log(scheduleMeeting("17:30", 30));
  console.log(scheduleMeeting("18:00", 15));
} catch (error) {
  console.log(`Ошибка: ${error.message}`);
}
