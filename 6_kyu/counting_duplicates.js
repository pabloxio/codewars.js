// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
function duplicateCount(text){
  let count = new Map()

  for (const char of text.toUpperCase().split("")) {
    if (!count.has(char)) {
      count.set(char, 0)
    }

    count.set(char, count.get(char) + 1)
  }

  return Array.from(count.values()).reduce((sum, elem) => elem > 1? sum += 1 : sum , 0)
}

module.exports = duplicateCount;
