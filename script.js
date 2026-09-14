const helloBtn = document.querySelector("#helloBtn");
const helloTag = document.querySelector(".helloTag");

helloBtn.addEventListener(
    "click",
    function (event){
        helloTag.innerHTML = "Hello!";
    } 
);


// objekt exempel

const person = {
    firstName:"Ludwig",
    lastName:"Kallin",
    age:"24",
    skills:["programming", "gaming", "music"]
};

person.fullName = function(){
    return this.firstName + " " + this.lastName;
}

//Kalkylator
let number1 = 0;
let number2 = 0;
const firstNumber = document.querySelector("#firstNumber");
const secondNumber = document.querySelector("#secondNumber");
const calcBtn = document.querySelector("#calculateBtn");
const showResult = document.querySelector("#result");

calcBtn.addEventListener(
    "click",
    calculateFunction
);



function calculateFunction(){
    number1 = Number(firstNumber.value);
    number2 = Number(secondNumber.value);
    showResult.innerHTML = number1 + number2;
}

//matte test
let numberOfQuestions = 0;
let correctAnswer;
const numberOfTestsInput=document.querySelector("#numberOfTests");
const showQuestionBtn=document.querySelector("#showQuestionBtn");
const showQuestion=document.querySelector("#showQuestion");

showQuestionBtn.addEventListener(
    "click",
    showTest
);

function showTest(){
    numberOfTests = numberOfTestsInput.value;
if (numberOfTests === 0 || numberOfTests == undefined)
        return;

    number1 = Math.round(Math.random() * 10);
    number2 = Math.round(Math.random() * 10);
    correctAnswer = number1 + number2;

    showQuestion.innerHTML = "Vad är " + number1 + " + " + number2 + "?"; 

}