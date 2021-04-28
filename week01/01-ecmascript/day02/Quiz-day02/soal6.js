function isCharUnique(chars) {
  for (let i = 0; i < chars.length; i++) {
      for (let j = 0; j < i; j++) {
          if (chars[i] === chars[j]) return false
      }
  }
  return true
}
console.log(isCharUnique('abcdefg'))
console.log(isCharUnique('abcdefga'))