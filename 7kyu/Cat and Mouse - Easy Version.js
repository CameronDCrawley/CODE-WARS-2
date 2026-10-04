function catMouse(x){
//skip over three characters
  if ( x.length - 2 > 3){
    return 'Escaped!'
  }else if (x.length - 2 <=3){
    return 'Caught!'
  }
  
}