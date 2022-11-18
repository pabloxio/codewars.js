// https://www.codewars.com/kata/56747fd5cb988479af000028/javascript

function getMiddle(s) {
  let middle = s.length/2
  let length = 1

  if (s.length%2==0) {
    middle -= 1
    length += 1
  }

  return s.split("").slice(middle, middle + length).join("")
}

module.exports = getMiddle
