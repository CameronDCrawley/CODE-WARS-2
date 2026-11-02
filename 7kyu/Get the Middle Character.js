function getMiddle(s) {
  //Code goes here!
let middle = Math.floor(s.length/2)
  
  let even = s.length %2 === 0
  let odd = s.length  %2 != 0

  if ( even){
    return s.slice(middle - 1, middle + 1)
  }else if (odd){
    return s.slice(middle, middle + 1 )
  }
  
  
}

//P: parameter is s which is a string
//  R :return the middle character or characters in  string 
// E :test => es || testing  => t || middle => dd
// P: CREATE a fucntion that gives the middle letter or letters of a string.
// Has. to determine whether its one letter or two. if its odd return one if its even return two