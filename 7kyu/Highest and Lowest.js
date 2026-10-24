function highAndLow(numbers){
  // ...
  let nums = numbers.split(' ')
  console.log(nums)
  
  return Math.max(...nums) + ' ' + Math.min(...nums)
}
// give a parameter of numbers that is a string of numbers with a space in between
//return the hihest number and the lowest number in the string
// 1 2 3 4 5 => "1 5"   5 6 7 8 9 10 => "5 10"   2 ,3 -2 , 7, 4 => "-2 7
// create a function that looks through theh string and returns the highest and lowest values of the numbers given