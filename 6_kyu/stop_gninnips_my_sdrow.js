function spinWords(s){
  return s.split(" ")
    .map(w => w.length >= 5 ? w.split("").reverse().join("") : w)
    .join(" ")
}

module.exports = spinWords
