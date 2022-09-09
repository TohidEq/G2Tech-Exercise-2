var cards = document.getElementsByClassName("history-card");
var elements = document.getElementsByClassName("calculator-button");
var questionBox = document.getElementById("question-box");
var myFunction = function () {
    var value = this.textContent;
    if (questionBox.textContent === "Error")
        questionBox.textContent = "";
    questionBox.textContent += value;
};
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}
var clear = document.getElementById("clear-button");
clear.addEventListener('click', function () {
    questionBox.textContent = "";
});
var submit = document.getElementById("submit-button");
var cardsBox = document.getElementById("cards-box");
submit.addEventListener('click', function () {
    try {
        if (questionBox.textContent === "Error")
            questionBox.textContent = "";
        else {
            cardsBox.innerHTML += "<div class=\"history-card\" onclick=\"historyHandle(this)\">".concat(questionBox.textContent, "= ").concat(eval(questionBox.textContent), "</div>");
            questionBox.textContent = eval(questionBox.textContent);
        }
    }
    catch (error) {
        questionBox.textContent = "Error";
    }
});
var historyHandle = function (e) {
    e.remove();
};
