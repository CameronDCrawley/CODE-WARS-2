function countBits(n) {
  // Program Me
let num = n.toString(2)
let n1 = num.split('1').length - 1
return n1
}

//takes a number knows an parameter n
//returns binary that we must get the length of all the ones in it
// example 1234 => 10011010010 => 5    123 => 100110 => 3
// create a function that turns the number to binary.after getting the binary get the length for the ones