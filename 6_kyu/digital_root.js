function digitalRoot(n) {
  if (n < 10) { return n }

  return digitalRoot(n.toString().split('').reduce((sum, num) => sum + parseInt(num), 0))
}

module.exports = digitalRoot
