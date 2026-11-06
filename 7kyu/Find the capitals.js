let capitals = function (word) {
	// Write your code here
  console.log(word)
  let capitals = /[A-Z]/g
  let w =[]

  for (let i = 0 ; i<word.length; i++){
    if (word[i]=== word[i].toUpperCase()){
      w.push(i)
    }
  }  
  return w
};

//P: parameter of word which is a string
//R: return an array of index of all capital letters in the string
//E: CaMEron => [0,2,3] heLLO => [2,3,4] jacKs [3]
//R: create a fucntion that first identifies the capital then is able
// to get the indexes