// https://www.codewars.com/kata/54ff3102c1bad923760001f3/javascript

function getCount(str) {
  return str.split("").filter((elem) => elem.match(/[aeiou]/)).length
}

module.exports = getCount;
