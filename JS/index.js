const firstLine = document.getElementById("firstLine");
const secondLine = document.getElementById("secondLine");
const thirdLine = document.getElementById("thirdLine");
const options = document.getElementById("options");


function arrow(){
    firstLine.classList.toggle("arrow");
    secondLine.classList.toggle("arrow");
    thirdLine.classList.toggle("arrow");
    options.classList.toggle("arrow");
}