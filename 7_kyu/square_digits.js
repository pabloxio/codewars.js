// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num){
  return parseInt(
    num
      .toString()
      .split("")
      .map((n) => n**2)
      .join("")
  )
}

module.exports = squareDigits;
