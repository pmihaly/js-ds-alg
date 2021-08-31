const szöveg = "STARWARS";
/**
 * Megkeresi az első ismétlődő karaktert
 * @param  {String} szöveg
 * @returns {String} első ismétlődő karakter
 */
function elsőIsmétlődőKarakter(szöveg) {
  const s = new Set();

  for (const betűindex in szöveg) {
    if (Object.hasOwnProperty.call(szöveg, betűindex)) {
      const betű = szöveg[betűindex];

      if (s.has(betű)) {
        return betű;
      } else {
        s.add(betű);
      }
    }
  }
}

console.log(elsőIsmétlődőKarakter(szöveg));

module.exports = elsőIsmétlődőKarakter;
