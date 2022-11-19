// https://www.codewars.com/kata/54ba84be607a92aa900000f1/javascript

function isIsogram(str){
  return str.toLowerCase()
    .split("")
    .sort()
    .map((e, i, l) => e === l[i+1])
    .every(e => e === false)
}

module.exports = isIsogram
