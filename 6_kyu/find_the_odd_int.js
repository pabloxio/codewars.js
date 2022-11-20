const findOdd = (l) => {
  let num = l[0]

  l.map(x => l.filter(y => x===y).length).forEach(function(n, i) {
    if (n%2===1) {
      num = l[i]
    }
  })

  return num
}

module.exports = findOdd
