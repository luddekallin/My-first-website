const helloBtn = document.querySelector("#helloBtn");
const helloTag = document.querySelector(".helloTag");

helloBtn.addEventListener(
    "click",
    function (event){
        helloTag.innerHTML = "Hello!";
    } 
);