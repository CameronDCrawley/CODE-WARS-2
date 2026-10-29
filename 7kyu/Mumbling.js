function accum(s) {
	// your code
  console.log(s)
let m = s.split('')

return m.map((letters,i)=> letters.toUpperCase() + letters.toLowerCase().repeat(i)).join('-')
  }

// a parameter of s which is a string type value
// return a string of the letters given and each time displaying one more with a dash in between
//efg => e-ff-ggg      abcde => a-bb-ccc-dddd-eeeee
//create a function that takes each letter in the string and repeats it based on its length with a dash in between