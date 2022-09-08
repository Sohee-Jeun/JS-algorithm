const hour = 0;
const min = 55;
if (hour >= 0 && min >= 45) {
  console.log(`${hour} ${min - 45}`);
} else if (hour > 0 && min < 45) {
  console.log(`${hour - 1} ${min + 15}`);
} else if (hour == 0 && min < 45) {
  console.log(`${hour + 23} ${min + 15}`);
}
