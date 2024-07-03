let prompts = [{
  question: "Que colores tiene la bandera Argentina?",
  option1: "1- Verde y Blanco",
  option2: "2- Rojo y Negro",
  option3: "3- Celeste y Blanco",
  correctAnswer: 3
},
{
  question: "Cual es la actividad principal de los hippies?",
  option1: "1- Fumar Hierba",
  option2: "2- Hablar sobre conspiraciones y creerse superiores",
  option3: "3- Hacer un circulo de tambores",
  correctAnswer: 3
},
{
  question: "Cuantas estrellas tiene Argentina en el deporte conocido como balonpie o fusbol?",
  option1: "1- 3 estrellas",
  option2: "2- 2 estrellas",
  option3: "3- 4 estrellas",
  correctAnswer: 1
},
{
  question: "Cual es el starter-pack de pobre?",
  option1: "1- Cafe con leche y bizcochos",
  option2: "2- Matecocido, pan con manteca y mandarina",
  option3: "3- Avocado tost con salmon",
  correctAnswer: 2
},
{
  question: "Cuantas arañas entraron en la casa de Robin el octubre pasado?",
  option1: "1- Ninguna araña",
  option2: "2- 3 arañas",
  option3: "3- Eran tantas, que se perdio la cuenta",
  correctAnswer: 3
}],
    userAnswer,
    score = 0;

const playTheGame = () => {
  prompts.forEach(singlePrompt => {
    userAnswer = Number(prompt(`${singlePrompt.question}\n ${singlePrompt.option1}\n ${singlePrompt.option2}\n ${singlePrompt.option3}`))
    if(singlePrompt.correctAnswer !== userAnswer) {
      score -= 10;
      alert(`Incorrecto, restaste 10 puntos, total al momento ${score} puntos`)
    }else {
      score += 10;
      alert(`Correcto, sumaste 10 puntos, total al momento ${score} puntos`)
    }
  })
  return score < 30 ? alert(`Tu puntaje fue ${score}, mediocre, volve a intentar`)
                    : alert(`Felicidades tu puntaje fue ${score} puntos`);
}

playTheGame();
