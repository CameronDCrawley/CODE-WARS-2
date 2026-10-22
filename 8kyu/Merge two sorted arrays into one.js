function mergeArrays(arr1, arr2) {
  console.log(arr1)
    let  arr = Array.from(new Set(arr1.concat(arr2).sort((a,b)=> a-b) ));

  return arr

}


//two arrays
// return one sroted array
//[1,3,5], [1,2,4] => [1,2,3,4,5]
// create a function that cobines two arrays sorts them in ascending order anand returns no duplicates. return an empty array if they are both empty