function oddOrEven(array) {
   //enter code here
  
  let nums = array.reduce((acc,c)=> acc +c,0)
  console.log(nums)
  
  if (nums %2 === 0){
    return 'even'
  }else{
    return'odd'
  }
  
}

// accepts of parameter called array which is an array of numbers 
// return a string that determines if the sum of the arrays is "odd" or "even"
// [0] => 'even' [0,2,6]=> even [1,3,5] => 'odd'
// create a function that adds the numbers in an array together then determines if their odd or even. after determinging this it
//returns a string of "odd" or "even"