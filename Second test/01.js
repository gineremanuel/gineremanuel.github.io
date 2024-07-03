//1 - a)
const revertir = (frase) => {
  let arrayOfLetters = frase.split(""),
      lengthOfFrase = arrayOfLetters.length,
      orderedArray = [];
  
  for(let i = 0; i < lengthOfFrase; i++) {
    let lastIndex = arrayOfLetters.pop()
    orderedArray.push(lastIndex)
  }
  console.log(orderedArray.join(""))
}
revertir("Hola soy Joney")

//1 - b)

const retornaPalabra = (frase) => {
  let arrayOfWords = frase.split(" "),
      lengthOfFrase = arrayOfWords.length,
      orderedArray = [];
  
  for(let i = 0; i < lengthOfFrase; i++) {
    let lastIndex = arrayOfWords.pop()
    orderedArray.push(lastIndex)
  }
  console.log(orderedArray)
}

retornaPalabra("Hola soy Joney")