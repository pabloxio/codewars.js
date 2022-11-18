// https://www.codewars.com/kata/556deca17c58da83c00002db/javascript

function tribonacci(signature, n) {
  if (n === 0) {
    return []
  }

  let newElem = signature.reduce((sum, elem) => sum += elem, 0)

  return [].concat(signature[0], tribonacci(signature.slice(1).concat(newElem), n-1))
}

module.exports = tribonacci;
