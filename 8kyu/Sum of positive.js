function positiveSum(arr) {
 let num = arr.filter(num => num > 0 )
let total = num.reduce((acc,c)=> acc + c , 0)
return total
}
