// JavaScript source code


const OUTPUT = document.getElementById("javaOutput");
let firstOne = "____";
let firstSecond = "____";
let firstThird = "____";
let firstFourth = "____";
let firstFifth = "____";
storyBase();

function storyBase() {
    OUTPUT.innerHTML = `
    The ${firstOne} ${firstSecond} would ${firstThird} the ${firstFourth}, after that the ${firstOne} ${firstSecond} ${firstFifth} .
` ;
}
function chooseFirstOne(choice) {
    firstOne = choice.innerHTML;
    storyBase();
}
function something(){
    document.getElementById("else").innerHTML =  "potato";
}
function chooseFirstSecond(choice){
    firstSecond = choice.innerHTML;
    storyBase();
}
function chooseFirstThird(choice){
    firstThird = choice.innerHTML;
    storyBase();
}
function chooseFirstFourth(choice){
    firstFourth = choice.innerHTML;
    storyBase();
}
function chooseFirstFifth(choice){
    firstFifth = choice.innerHTML;
    storyBase();
}
