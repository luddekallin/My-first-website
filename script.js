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