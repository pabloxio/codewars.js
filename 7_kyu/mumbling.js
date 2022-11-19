// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/javascript

function accum(s) {
  return s.split("")
    .map((elem, index) => elem.toUpperCase() + elem.toLowerCase().repeat(index))
    .join("-")
}

module.exports = accum
