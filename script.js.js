

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter"
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Stephen King", "J.K. Rowling", "Charles Dickens"],
    answer: "Harper Lee"
  },
 {
    question: "how many union territoties in india?",
    options: ["7", "6", "4","8"],
    answer: "7"

  },
  {
    question: "what is the capital of italy?",
    options: ["england", "Japan", "Tokyo", "Rome"],
    answer: "Rome"
  },
  {
    question: "what is the full form of irs?",
    options: ["indian reinforce service", "indian administrative service", "indian police service", "Indian railway service"],
    answer: "Indian railway service"
  },
  {
    question: "what is currency of usa?",
    options: ["None", "Yen", "Rupee", "Dollars"],
    answer: "Dollars"
  },
  {
    question: "What is our national game?",
    options: ["Hockey", "Kho-kho", "Kabbadi", "Badminton"],
    answer: "Hockey"
  },
  {
    question: "Who is the father of c language?",
    options: ["Dennis Ritchie", "James gosling", "patrick naughton", "mike sheridian"],
    answer: "Dennis Ritchie"
  },
  {
    question: "Who invented python?",
    options: ["Guido van rossum", "patrick naughton", "James gosling", "None"],
    answer: "Guido van rossum"
  }

];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsForm = document.getElementById('options');
const resultElement = document.getElementById('result');

function showQuestion() {
  const current = questions[currentQuestion];
  questionElement.textContent = `${currentQuestion + 1}. ${current.question}`;
  optionsForm.innerHTML = '';
  current.options.forEach((option, index) => {
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'option';
    input.value = option;
    const label = document.createElement('label');
    label.textContent = option;
    optionsForm.appendChild(input);
    optionsForm.appendChild(label);
    optionsForm.appendChild(document.createElement('br'));
  });
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    alert("Please select an option!");
    return;
  }
  const current = questions[currentQuestion];
  if (selectedOption.value === current.answer) {
    score++;
     resultElement.innerHTML = '<p class="correct">Correct!&#x2713; </p>';
} else {
    resultElement.innerHTML = `<p class="incorrect">Incorrect!&#x2717; The correct answer is: ${current.answer}</p>`;
}
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.style.display = 'none';
  optionsForm.style.display = 'none';
  document.getElementById('submit-btn').style.display = 'none';
  resultElement.textContent = `Quiz completed! You got ${score} out of ${questions.length} questions correct.\u2713`;
 
}

document.getElementById('submit-btn').addEventListener('click', checkAnswer);

showQuestion();
