function dnaStrand(dna){
  let letters = {'A':'T','T':'A','C':'G','G':'C'}
  
  return dna.split('').map((word)=> letters[word]).join('')
}
//P:A parmeter of dna which is a string
//R: return dna with the all the A turns into T and all the T turned into A
// do the same for C and G
// E: 'AAAA'=> 'TTTT' 'CGCG'=> 'GCGC' AGCT => 'TCGA'
//P: create a fucntion that first identifies the letters. then able to switch the
//letters out for the corresponding pairs