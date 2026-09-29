function squareDigits(num){
let n1= num.toString().split('').map(n => n * n).join('')
return Number(n1)
}