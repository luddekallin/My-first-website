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
