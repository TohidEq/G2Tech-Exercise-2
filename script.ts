
var cards = document.getElementsByClassName("history-card");
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
var cardsBox = document.getElementById("cards-box")

submit.addEventListener('click',()=>{
    try {
        if(questionBox.textContent==="Error")
            questionBox.textContent=""
        else{    
            cardsBox.innerHTML += `<div class="history-card" onclick="historyHandle(this)">${questionBox.textContent}= ${eval(questionBox.textContent)}</div>`
            
            questionBox.textContent = eval(questionBox.textContent);
        }
    } catch (error) {
        questionBox.textContent="Error"
    }
});


const historyHandle = (e:any)=>{
    e.remove()
}