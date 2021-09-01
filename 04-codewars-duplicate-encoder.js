// codewars.com/r/b0fwFw
// Alakítsunk át egy stringet egy másik stringre,
// de minden karakter legyen "(", kivéve az ismétlődő karakterek,
// azok legyenek ")".

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

/**
 * Visszaadja a kapott szót, de minden karaktert zárójelekre cserél
 * Nyitó zárójel: csak egy ilyen betű van a szóban
 * Záró zárójel: több ilyen betű van a szóban
 * @param  {String} word
 * @returns {String}
 */
function duplicateEncoder2(word) {
  word = word.toLowerCase();
  let newWordWithParentheses = "";

  for (const charIndex in word) {
    if (Object.hasOwnProperty.call(word, charIndex)) {
      const char = word[charIndex];

      if (word.split(char).length - 1 <= 1) {
        newWordWithParentheses += "(";
      } else {
        newWordWithParentheses += ")";
      }
    }
  }

  return newWordWithParentheses;
}

// codewars legjobbra értékelt megoldás
// arr.indexOf(elem): legelső elem pozíciója
// arr.lastIndexOf(elem): legutolsó elem pozíciója
// ha első pozíciója egyenlő az utolsóval, csak egy ilyen elem van a strben
// arr.map(function(currentValue, index, arr))
function duplicateEncoder(word) {
  return word
    .toLowerCase()
    .split("")
    .map((char, _, word) => {
      return word.indexOf(char) == word.lastIndexOf(char) ? "(" : ")";
    })
    .join("");
}

console.log(duplicateEncoder2("recede"));

module.exports = duplicateEncoder;
