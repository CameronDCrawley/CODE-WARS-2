function XO(str) {
    //code here
let string = str.toLowerCase()

let xCount = string.split('x')
let oCount = string.split('o')

console.log(xCount,oCount)

return xCount.length === oCount.length

  
  
}