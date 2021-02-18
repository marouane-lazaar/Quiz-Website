let questionsData = [
  {
    text: "Question ",
    answers: [
      {
        text: "rep1",
        isCorrect: false
      },
      {
        text: "rep2r",
        isCorrect: true
      },
      {
        text: "rep3",
        isCorrect: false
      }
    ]
  },
  {
    text: "Question ",
    answers: [
      {
        text: "rep1",
        isCorrect: false
      },
      {
        text: "rep2r",
        isCorrect: true
      },
      {
        text: "rep3",
        isCorrect: false
      }
    ]
  },
  {
    text: "question",
    answers: [
      {
        text: "Rep1",
        isCorrect: true
      },
      {
        text: "Rep2",
        isCorrect: false
      },
      {
        text: "Rep3",
        isCorrect: false
      },
      {
        text: "Rep4",
        isCorrect: false
      }
    ]
  },
  {
    text: "Question ",
    answers: [
      {
        text: "rep1",
        isCorrect: false
      },
      {
        text: "rep2r",
        isCorrect: true
      },
      {
        text: "rep3",
        isCorrect: false
      }
    ]
  },
  {
    text: "question",
    answers: [
      {
        text: "Rep1",
        isCorrect: true
      },
      {
        text: "Rep2",
        isCorrect: false
      },
      {
        text: "Rep3",
        isCorrect: false
      },
      {
        text: "Rep4",
        isCorrect: false
      }
    ]
  },
  {
    text: "question",
    answers: [
      {
        text: "Rep1",
        isCorrect: true
      },
      {
        text: "Rep2",
        isCorrect: false
      },
      {
        text: "Rep3",
        isCorrect: false
      },
      {
        text: "Rep4",
        isCorrect: false
      }
    ]
  },
  {
    text: "question",
    answers: [
      {
        text: "Rep1",
        isCorrect: true
      },
      {
        text: "Rep2",
        isCorrect: false
      },
      {
        text: "Rep3",
        isCorrect: false
      },
      {
        text: "Rep4",
        isCorrect: false
      }
    ]
  },
  
];

// variables initialization
let questions = [];
let score = 0,
  answeredQuestions = 0;
let appContainer = document.getElementById("questions-container");
let scoreContainer = document.getElementById("score-container");
scoreContainer.innerHTML = `Score: ${score}/${questionsData.length}`;

/**
 * Shuffles array in place. ES6 version
 * @param {Array} arr items An array containing the items.
 */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

shuffle(questionsData);

// creating questions
for (var i = 0; i < questionsData.length; i++) {
  let question = new Question({
    text: questionsData[i].text,
    answers: questionsData[i].answers
  });

  appContainer.appendChild(question.create());
  questions.push(question);
}

document.addEventListener("question-answered", ({ detail }) => {
  if (detail.answer.isCorrect) {
    score++;
  }

  answeredQuestions++;
  scoreContainer.innerHTML = `Score: ${score}/${questions.length}`;
  detail.question.disable();

  if (answeredQuestions == questions.length) {
    setTimeout(function () {
      alert(`Quiz completed! \nFinal score: ${score}/${questions.length}`);
    }, 100);
  }
});

console.log(questions, questionsData);
