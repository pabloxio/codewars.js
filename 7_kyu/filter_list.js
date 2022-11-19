// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/javascript

function filter_list(l) {
  return l.filter(v => typeof(v) === "number")
}

module.exports = filter_list
