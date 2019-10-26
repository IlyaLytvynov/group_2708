export function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomColor() {
  return (
    'rgb(' +
    randomValue(0, 255) +
    ',' +
    randomValue(0, 255) +
    ',' +
    randomValue(0, 255) +
    ')'
  );
}
