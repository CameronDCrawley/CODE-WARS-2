function twoSum(numbers, target) {
  
  console.log(numbers)
  console.log(target)
  
  let index1= []
  
  
 for ( let i = 0; i<= numbers.length;i++){
     
   for( let j = 1 ; j<=numbers.length ; j++){
     if( numbers[i] + numbers[j] === target){
       index1.push(i,j)
       console.log(j)
      
     }
       
   }
   
 }
    return index1

  
  
}
// numbers
// return the index of two items that the sum of two numbers in the array would equal the target number
// [2,3,4]=> 7 return [1,2]  [1,2,3]=> 3 [0,1]
// function that finds the index
