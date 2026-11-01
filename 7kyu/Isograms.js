function isIsogram(str){
  //...
let letters = str.toLowerCase()

for ( let i = 0 ; i<letters.length;i++){
  if (letters.indexOf(letters[i]) !== i){
    return false
  }
}
return true
}
//P: a parameter of str which is a string
//R: return a boolean true or false depending on the string
//E: aba => false hey => true  hellOo => false
//P: create a function that looks  if their is a same letter
// then return a true or false