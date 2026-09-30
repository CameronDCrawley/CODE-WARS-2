function sumDigits(number) {
  let num = String(Math.abs(number)).split('')  
 return num.reduce((acc,c)=> acc + Number(c) ,0)
          

}
