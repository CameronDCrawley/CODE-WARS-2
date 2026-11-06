function getSum(a, b)
{
   //Good luck!
  console.log(a)
  console.log(b)
 let min = Math.min(a,b)
 let max = Math.max(a,b)
 let total = 0
 
 for (let i=min;i<=max;i++){
   
   total +=i
 }
return total

}

//P: two parameters a and b which are numbers . can be positive or negative
//R: returns the sum of all numbers in starting with a in between and end with b
//E: (3,4)=>7 (-2,2)=>0 (1,3)=>8
//P: crrate a function that first is able to find the digits in between
// then after add all of the numbers together
//