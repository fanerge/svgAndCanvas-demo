// 1, 6
export function random(min, max) {
  // [0, 1)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
