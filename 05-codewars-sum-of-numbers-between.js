// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
// Adott két szám, találd meg a két szám és közöttük lévő számok összegét
// 1, 2 -> 1 + 2 = 3
// 1, 3 -> 1 + 2 + 3 = 6
// 1, 0 -> 1 + 0 = 1

/**
 * Két szám és közöttük lévő számok összege
 * @param   {Number} a
 * @param   {Number} b
 * @returns {Number}
 */
function getSum(a, b) {
  s = 0;

  if (a > b) {
    const temp = a;
    a = b;
    b = temp;
  }

  for (let i = a; i <= b; i++) {
    s += i;
  }
  return s;
}

console.log(getSum(1, 2));

module.exports = getSum;
