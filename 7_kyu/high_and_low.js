// https://www.codewars.com/kata/554b4ac871d6813a03000035/javascript

function highAndLow(numbers){
  let nums = numbers.split(" ").map((n) => parseInt(n))

  return [Math.max(...nums), Math.min(...nums)].join(" ")
}

module.exports = highAndLow
