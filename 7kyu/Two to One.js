function longest(s1, s2) {
  // your code
  console.log(s1)
  console.log(s2)
  let both = s1.concat(s2)
  console.log(both)
  let sorted = both.split('').sort()
  let noRepeat = new Set(sorted)
  console.log(noRepeat)
  let letters =[...noRepeat]
  return String(letters).replaceAll(',','')
}
/*
P: two parameters of s1 and s2 that are strings
R: return a new sorted array that includes only letters from a-z
im alphabetical order with each letter only appearing once
E: a = "xyweeeeyuo" b="axhyusj" => "aehjosuxy"
P: create a fucntion that put alls the letters from both params in order 
combines them and make sure theirs no repeats 
*/


