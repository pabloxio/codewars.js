// https://www.codewars.com/kata/52fba66badcd10859f00097e/javascript

function disemvowel(str) {
  return str.split("").filter((elem) => !elem.match(/[aeiou]/i)).join("")
}

module.exports = disemvowel;
