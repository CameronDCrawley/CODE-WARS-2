function createPhoneNumber(numbers){
  console.log(numbers)
  let n = String(numbers)
  //console.log(n)
  let phone = '('+ n.substr(0,5) + ')'+ ' ' + n.substr(5,7) + '' + '-'+ n.substr(12,14)
  
  let number = phone.toString().replaceAll(',','')
return number  
  
  //console.log(phone)
  
}