function sumTwoSmallestNumbers(numbers) {  
  // Code here
  console.log(numbers)
  let num = numbers.sort((a,b)=>a-b)
  return num[0] + num[1]
}
/*
P: parameters numbers which is an array of intger
R: return the sum of the two lowest postive integers
E: [10,5,3,12] => 8 [-1,5,100,200]=> 105  [-2,-89,1000,2]=>1002
P: create a function that finds the two lowest numbers in an array 
that are postive and then returns the sum

*/