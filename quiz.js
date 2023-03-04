const quiz = [
    {
        question: "What is the capital of France?",
        option1: "Paris",
        option2: "London",
        option3: "Rome",
        option4: "Madrid",
        correctAnswer: "option1"
    },
    {
        question: "What is the tallest mountain in the world?",
        option1: "Mount Everest",
        option2: "K2",
        option3: "Kangchenjunga",
        option4: "Lhotse",
        correctAnswer: "option1"
    },
    {
        question: "Who is the current President of the United States?",
        option1: "Donald Trump",
        option2: "Joe Biden",
        option3: "Barack Obama",
        option4: "George W. Bush",
        correctAnswer: "option2"
    },
    {
        question: "What is the currency of Japan?",
        option1: "Yen",
        option2: "Dollar",
        option3: "Euro",
        option4: "Pound",
        correctAnswer: "option1"
    },
    {
        question: "Who invented the telephone?",
        option1: "Alexander Graham Bell",
        option2: "Thomas Edison",
        option3: "Nikola Tesla",
        option4: "Guglielmo Marconi",
        correctAnswer: "option1"
    }
];



const questionbox = document.getElementById("question");
const a = document.getElementById("atext");
const b = document.getElementById("btext");
const c = document.getElementById("ctext");
const d = document.getElementById("dtext");

const button = document.getElementById("submit");

let currentquestion = 0;
let score = 0;

updatequestion();
function updatequestion() {

    const currentquiz = quiz[currentquestion];
    questionbox.innerText = currentquiz.question;
    a.innerText = currentquiz.option1;
    b.innerText = currentquiz.option2;
    c.innerText = currentquiz.option3;
    d.innerText = currentquiz.option4;

}

function getselect() {

    const allanswers = document.querySelectorAll(".answer");

    let answer = undefined;

    allanswers.forEach((answerel) => {
        if (answerel.checked) {
            answer = answerel.id;
        }
    });
    return answer;
}

button.addEventListener("click", () => {

    const attempt = getselect()
    // console.log(attempt)"
     
    if (attempt) {
        if (attempt === quiz[currentquestion].correctAnswer) {
            score++;
        }
        currentquestion++;
        if (currentquestion < quiz.length) {
            updatequestion()
        } else {
            alert(`you have given ${score} right out of ${quiz.length}`)
        }


    }
    
})
