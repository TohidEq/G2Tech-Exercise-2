const buttonHandle = (_e: any)=>{
    console.log(_e)
}

//document.getElementsByClassName("duc")

var elements = document.getElementsByClassName("calculator-button");
var questionBox = document.getElementById("question-box")
var myFunction = function() {
    var value = this.textContent;
    if(questionBox.textContent==="Error")
        questionBox.textContent=""
    questionBox.textContent += value
};
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}

const clear = document.getElementById("clear-button")
clear.addEventListener('click',()=>{
    questionBox.textContent="";
})

const submit = document.getElementById("submit-button")
submit.addEventListener('click',()=>{
    try {
        questionBox.textContent = eval(questionBox.textContent);
    } catch (error) {
        questionBox.textContent="Error"
    }
})