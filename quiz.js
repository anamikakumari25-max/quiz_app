const container = document.querySelector(".container");
const question = document.querySelector(".question");
const choices = document.querySelector(".choices");
const startBtn = document.querySelector("#startBtn");
const backBtn = document.querySelector("#backBtn"); 
const scoreCard = document.querySelector(".scoreCard");
const alert = document.querySelector(".alert");

const quizQuestions = [ 
    {
        question: "What does HTML stand for?",
        choices: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language",
            "Hyperlink and Text Markup Language"
        ],
        correctAnswer: "Hyper Text Markup Language"
    },

    {
        question: "Which property is used to change text color in CSS?",
        choices: [
            "font-color",
            "text-color",
            "color",
            "text-style"
        ],
        correctAnswer: "color"
    },

    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        choices: [
            "var",
            "let",
            "const",
            "All of the above"
        ],
        correctAnswer: "All of the above"
    },

    {
        question: "Which tag is used to create a hyperlink?",
        choices: [
            "<a>",
            "<link>",
            "<href>",
            "<hyperlink>"
        ],
        correctAnswer: "<a>"
    },

    {
        question: "what does css stand for?",
        choices: [
            "cascading style sheets",
            "creative style sheets",
            "computer style sheets",
            "colorful style sheets"
        ],
        correctAnswer:  "cascading style sheets"
    },

    {
        question: "Which language is used to make a website interactive?",
        choices: [
            "HTML",
            "CSS",
            "JAVASCRIPT",
            "PYTHON"

        ],
        correctAnswer: "JAVASCRIPT"
    },

    {
        question: "What will console.log(2 + '2') output?",
        choices: [
            "4",
            "22",
            "NaN",
            "Error"
        ],
        correctAnswer:  "22"
    },

    {
        question: "Which property is used to make a background color?",
        choices: [
            "background-color",
            "color",
            "background-image",
            "background-size"
        ],
        correctAnswer: "background-color"
    },

    {
        question: "Which tag is used to insert an image?",
        choices: [
            "<img>",
            "<image>",
            "<picture>",
            "<src>"
        ],
        correctAnswer: "<img>"
    },

    {
        question:  "Which method is used to create a new HTML element in JavaScript?",
        choices: [
            "getElementById()",
            "querySelector()",
            "addEventListener()",
            "createElement()"
        ],
        correctAnswer: "createElement()"
    }
];

let currentQuestionindex = 0; 
let score = 0;
let quizOver = false;


let userAnswers = new Array(quizQuestions.length);

const showquestions = () => { 

    const questionDetails =
        quizQuestions[currentQuestionindex];

    question.textContent =
        questionDetails.question;

    choices.textContent = "";

    for(let i = 0;
        i < questionDetails.choices.length;
        i++){

        const currentChoice =
            questionDetails.choices[i];

        const choicesdiv =
            document.createElement("div");

        choicesdiv.textContent =
            currentChoice;

        choicesdiv.classList.add("choice");

        choices.appendChild(choicesdiv);

        
        if (
            userAnswers[currentQuestionindex]
            === currentChoice
        ) {
            choicesdiv.classList.add("selected");
        }

        choicesdiv.addEventListener('click', () => {

            const allChoices =
                document.querySelectorAll(".choice");

            allChoices.forEach(choice => {
                choice.classList.remove("selected");
            });

            choicesdiv.classList.add("selected");

        });

    }

}

const checkAnswer = () => {

    const selectedChoice =
        document.querySelector('.choice.selected');

    if (!selectedChoice){

        displayAlert("select your answer");
        return;
    }


    userAnswers[currentQuestionindex] =
        selectedChoice.textContent;

    if (
        selectedChoice.textContent ===
        quizQuestions[currentQuestionindex]
        .correctAnswer
    ){

        displayAlert("Correct Answer!");
        score++;

    } else {

        displayAlert("Wrong Answer!");

    }

    currentQuestionindex++;

    if(currentQuestionindex < quizQuestions.length ){

        showquestions();

    }
    else{

        showscore();
        quizOver = true;

    }

}

const goBackQuestion = () => {

    if (currentQuestionindex > 0){

        currentQuestionindex--;

        showquestions();

    } else {

        displayAlert("This is first question");

    }

}
const showscore = () => {

    question.textContent = "";

    choices.textContent  = "";

    scoreCard.textContent =
        `you scored ${score} out of ${quizQuestions.length}`;

    displayAlert("you have completed this quiz!");

    startBtn.textContent = "play Again";

}


const displayAlert = (msg) => {

    alert.style.display = "block";

    alert.textContent = msg;

    setTimeout(() => {

        alert.style.display = "none";

    },2000);

}

showquestions();

startBtn.addEventListener("click", () => {

    if(quizOver){

        startBtn.textContent = "Next";

        scoreCard.textContent = "";

        currentQuestionindex  = 0;

        score = 0;

        userAnswers =
            new Array(quizQuestions.length);

        showquestions();

        quizOver = false;

    }
    else{

        checkAnswer();

    }

});

backBtn.addEventListener("click", () => {
    if (!quizOver) {
        goBackQuestion();
    }
});



backBtn.addEventListener("click", () => {

    if (!quizOver){

        goBackQuestion();

    }

});

// const heading = document.createElement("h1");
// heading.textContent = "i love coding";
// heading.style.backgroundColor = "blue";
// heading.style.color  = "red";
// heading.style.textAlign = "center"
// document.body.appendChild(heading);


// const btn = document.createElement("button");
//  btn.textContent = "click here" 
//  btn.style.textAlign = "center"
//  btn.style.backgroundColor = "blue"
//  btn.style.color = "red"
//  document.body.appendChild(btn);


//  document.body.style.backgroundColor = "blue";