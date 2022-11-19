const solution = (number) => {
  return Array.from({length: number-1}, (_, i) => i + 1)
    .filter(n => (n%3===0 || n%5===0))
    .reduce((n, sum) => sum+=n, 0)
}

module.exports = solution
