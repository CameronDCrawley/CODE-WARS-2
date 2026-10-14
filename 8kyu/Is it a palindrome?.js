function isPalindrome(x) {
  // your code here
  let str = x.toLowerCase()
  let reverse= str.split('').reverse().join('')
  if ( str === reverse){
    return true
  }else {
    return false
  }
}