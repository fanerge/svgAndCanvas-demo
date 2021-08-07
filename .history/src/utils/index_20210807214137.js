// 1, 6
export function random(min, max) {
  // [0, 1)
  let temp = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(temp);
  return temp;
}
