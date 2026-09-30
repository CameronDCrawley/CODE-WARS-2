function squareDigits(num){
let n= num.toString().split('').map(n => n * n).join('')
return Number(n)
}