function likes(names) {
  const length = names.length
  if (length === 0) {
      return 'no one likes this'
  }

  if (length === 1 ) {
      return `${names[0]} likes this`
  }

  if (length === 2 || length === 3) {
      return `${names.slice(0, length-1).join(', ')} and ${names[length - 1]} like this`
  }

  return `${names.slice(0, 2).join(', ')} and ${names.slice(2).length} others like this`
}

module.exports = likes
