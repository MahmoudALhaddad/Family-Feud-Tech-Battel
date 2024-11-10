document.addEventListener("DOMContentLoaded", function() {
    var bool = [true, true, true, true, true, true, true, true];
    var button = "";
    var correct = new Audio("./assets/sounds/correct_answer.mp3");
    var wrong = new Audio("./assets/sounds/wrong_answer.mp3");
    let answersRoundOne = ["JavaScript", "Python", "Java", "C#", "C++", "PHP", "Ruby", "Swift"];     
    let answersRoundTwo = ["Assembly", "Haskell", "C++", "Perl", "R", "Lisp", "Prolog", "Scala"];
    let answersRoundThree = ["phone", "Check ", "Stretch", "Brush teeth", "Drink water", "Make the bed", "Look in the mirror", "Get out of bed"];
    if(document.getElementById("round")!= null && document.getElementById("round").value == "2"){
        answersRoundOne = answersRoundTwo;
    }else if(document.getElementById("round")!= null && document.getElementById("round").value == "3"){
        answersRoundOne = answersRoundThree;
    }
    function first_answer(answer, buttonNumber) {
        button = "myButton" + buttonNumber;
        if (bool[buttonNumber - 1]) {
            document.getElementById(button).classList.toggle("test");
            document.getElementById('back'+buttonNumber).innerHTML = answer;
            correct.currentTime = 0;
            correct.play();
            bool[buttonNumber - 1] = false;
        }
    }

    document.addEventListener("keydown", function(event) {
        const key = event.key;

        if (key >= "1" && key <= "8") {
            first_answer(answersRoundOne[key - 1], key);
        }

        if (key === "x") {
            wrong.currentTime = 0;
            wrong.play();
            showWrongAnswerImage();
        }
    });

    function showWrongAnswerImage() {
        const imageContainer = document.getElementById("wrong-answer-image-container");
        imageContainer.style.display = "block";

       setTimeout(function() {
            imageContainer.style.display = "none";
        }, 1000); 
    }
});
