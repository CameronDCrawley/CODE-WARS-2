function countPositivesSumNegatives(input) {
   if (!input || input.length === 0){
     return []
   }else{
  let positive = input.filter(i=> i > 0)
  let negative = input.filter(i => i < 0)
  let posCount = positive.length
  let negCount = negative.reduce((acc,c)=> acc + c,0)
  return [posCount,negCount]
 
  }   
}