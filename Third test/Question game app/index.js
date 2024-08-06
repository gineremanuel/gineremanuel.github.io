const questions = [
  {
    question: "Que colores tiene la bandera Argentina?",
    options: [
      {
      answer: 'Verde y Blanco',
      correctAnswer: false
    },
    {
      answer: 'Rojo y Negro',
      correctAnswer: false
    },
    {
      answer: 'Celeste y Blanco',
      correctAnswer: true
    }
  ]
  },
  {
    question: "Cual es la actividad principal de los hippies?",
    options: [
      {
      answer: 'Fumar Hierba',
      correctAnswer: false
    },
    {
      answer: 'Hablar sobre conspiraciones y creerse superiores',
      correctAnswer: false
    },
    {
      answer: 'Hacer un circulo de tambores',
      correctAnswer: true
    }
  ]
  },
  {
    question: "Cuantas estrellas tiene Argentina en el deporte conocido como balonpie o fusbol?",
    options: [
      {
        answer: '3 estrellas',
        correctAnswer: true
      },
      {
        answer: '2 estrellas',
        correctAnswer: false
      },
      {
        answer: '4 estrellas',
        correctAnswer: false
      }
    ]
  },
  {
    question: "Cual es el starter-pack de pobre?",
    options: [
      {
        answer: 'Cafe con leche y bizcochos',
        correctAnswer: false
      },
      {
        answer: 'Matecocido, pan con manteca y mandarina',
        correctAnswer: true
      },
      {
        answer: 'Avocado tost con salmon',
        correctAnswer: false
      }
    ]
  },
  {
    question: "Cuantas arañas entraron en la casa de Robin el octubre pasado?",
    options: [
      {
      answer: 'Ninguna araña',
      correctAnswer: false
    },
    {
      answer: '3 arañas',
      correctAnswer: false
    },
    {
      answer: 'Eran tantas, que se perdio la cuenta',
      correctAnswer: true
    }
  ]
    
  }
],
   d = document,
   $continueBtn = d.querySelector('#continue'),
   $backBtn = d.querySelector('#backBtn')

  let questionNumber = 0,
   score = 0,
   $answersSelector = d.querySelector('.answer'),
   $fragment = d.createDocumentFragment(),
   playTheGame = (question) => {
    d.querySelector('.question').innerHTML = question.question;
    question.options.forEach(option => {
      const $answerButton = d.createElement("button");
      if(option.correctAnswer) $answerButton.setAttribute("answer", option.correctAnswer)
      $answerButton.classList.add('answersBtn')
      $answerButton.textContent = option.answer;
      $fragment.appendChild($answerButton)
      $answerButton.addEventListener('click', e => {
        $backBtn.classList.add('hide')
        $continueBtn.classList.remove('hide')
        if(e.target.classList.contains('answersBtn')){
        const $answersBtns = d.querySelectorAll('.answer button')
        $answersBtns.forEach(btn => btn.setAttribute('disabled', ''))
          if(e.target.hasAttribute('answer')) {
            score += 10
          }else {
            $answerButton.classList.add('wrongAnswer')
            score -= 10
          }
          d.querySelector('.score p').innerHTML = score;
          const $correctAnswer = d.querySelector('[answer=true]')          
          $correctAnswer.classList.add('correctAnswer')
        } 
      })
    })
    $answersSelector.appendChild($fragment);
    return questionNumber ++
  }

d.addEventListener('DOMContentLoaded', (e) => {
  d.querySelector('.score p').innerHTML = score
  playTheGame(questions[questionNumber])
  d.addEventListener('click', (e) => {
    if(e.target.matches('#continue') && questionNumber < questions.length) {
      $answersSelector.textContent = ''
      playTheGame(questions[questionNumber])
      $backBtn.classList.remove('hide')
      $continueBtn.classList.add('hide')
      }
    if (questionNumber === questions.length) {
      $continueBtn.classList.add('hide')
      $backBtn.classList.remove('hide')
    }
  })
})
