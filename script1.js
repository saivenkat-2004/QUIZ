 document.addEventListener("DOMContentLoaded", function() {
    const questions1 = [
        {
    question: "What is the keyword used to define function in python?",
    options: ["def", "function", "init", "none"],
    answer: "def"
  },
  {
    question: "In any program execution starts from which function?",
    options: ["Main", "builtin function", "header files", "None"],
    answer: "Main"
  },
  {
    question: "what is the part of a database that holds only one type of information?",
    options: ["Report", "field", "Record", "File"],
    answer: "field"
  },
 {
    question: "OS stands for?",
    options: ["Order of significance", "Open software", "Operating system","Optical sensor"],
    answer: "Operating system"

  },
  {
    question: "How many bits make a byte?",
    options: ["16", "8", "24", "12"],
    answer: "8"
  },
  {
    question: "The first search engine on internet is?",
    options: ["Archie", "Google","Bing", "Yahoo"],
    answer: "Archie"
  },
  {
    question: "The number of bits used by ipv6 address is?",
    options: ["128", "64", "32", "45"],
    answer: "128"
  },
  {
    question: "The first web browser invented in 1990 was?",
    options: ["World wide wed", "internet explorer", "mossaic", "nexus"],
    answer: "World wide web"
  },
  {
    question: "Who is the father of c language?",
    options: ["Dennis richie", "James gosling", "patrick naughton", "mike sheridian"],
    answer: "Dennis Ritchie"
  },
  {
    question: "Who invented python?",
    options: ["Guido van rossum", "patrick naughton", "James gosling", "None"],
    answer: "Guido van rossum"
  }

    ];

    let currentQuestion1 = 0;
    let score1 = 0;

    const questionElement1 = document.getElementById('question');
    const optionsForm1 = document.getElementById('options');
    const resultElement1 = document.getElementById('result');

    function showtheQuestion() {
        const current1 = questions1[currentQuestion1];
        questionElement1.textContent = `${currentQuestion1 + 1}. ${current1.question}`;
        optionsForm1.innerHTML = '';
        current1.options.forEach((option, index) => {
            const input1 = document.createElement('input');
            input1.type = 'radio';
            input1.name = 'option';
            input1.value = option;
            const label1 = document.createElement('label');
            label1.textContent = option;
            optionsForm1.appendChild(input1);
            optionsForm1.appendChild(label1);
            optionsForm1.appendChild(document.createElement('br'));
        });
    }

    function checktheAnswer() {
        const selectedOption1 = document.querySelector('input[name="option"]:checked');
        if (!selectedOption1) {
            alert("Please select an option!");
            return;
        }
        const current1 = questions1[currentQuestion1];
        if (selectedOption1.value === current1.answer) {
            score1++;
            resultElement1.innerHTML = '<p class="correct">Correct! &#x2713;</p>';
        } else {
            resultElement1.innerHTML = `<p class="incorrect">Incorrect! &#x2717; The correct answer is: ${current1.answer}</p>`;
        }
        currentQuestion1++;
        if (currentQuestion1 < questions1.length) {
            showtheQuestion();
        } else {
            showtheResult();
        }
    }

    function showtheResult() {
        questionElement1.style.display = 'none';
        optionsForm1.style.display = 'none';
        document.getElementById('submit-btn').style.display = 'none';
        resultElement1.textContent = `Quiz completed! You got ${score1} out of ${questions1.length} questions correct.\u2713`;
    }

    document.getElementById('submit-btn').addEventListener('click', checktheAnswer);

    showtheQuestion();
});
