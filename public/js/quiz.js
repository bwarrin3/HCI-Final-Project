let questionNumbers = document.querySelectorAll(".quizQuestionNumber");
let questions = document.querySelectorAll(".question");
let submit = document.querySelector("#submit");
const inputs0 = document.querySelectorAll('input[name="question0"]');
const inputs1 = document.querySelectorAll('input[name="question1"]');
const inputs2 = document.querySelectorAll('input[name="question2"]');
const inputs3 = document.querySelectorAll('input[name="question3"]');
const inputs4 = document.querySelectorAll('input[name="question4"]');
const inputs5 = document.querySelectorAll('input[name="question5"]');
const inputs6 = document.querySelectorAll('input[name="question6"]');
const inputs7 = document.querySelectorAll('input[name="question7"]');
const inputs8 = document.querySelectorAll('input[name="question8"]');
const inputs9 = document.querySelectorAll('input[name="question9"]');



questions.forEach((question) => {
    question.style.display = "none";
})
questions[0].style.display = "block";

questionNumbers.forEach((element) => {
    element.addEventListener("click", (e) => {
        questions.forEach((question) => {
            if (question.id === element.id) {
                question.style.display = "block";
            }
            else {
                question.style.display = "none";
            }
        });

    });
});

submit.addEventListener("click", function(e) {
    let score = 0;
    if (inputs0[0].checked) {
        score += 1;
    }
    if (inputs1[3].checked) {
        score += 1;
    }
    if (inputs2[1].checked) {
        score += 1;
    }
    if (inputs3[3].checked) {
        score += 1;
    }
    if (inputs4[2].checked) {
        score += 1;
    }
    if (inputs5[0].checked) {
        score += 1;
    }
    if (inputs6[1].checked) {
        score += 1;
    }
    if (inputs7[0].checked) {
        score += 1;
    }
    if (inputs8[2].checked) {
        score += 1;
    }
    if (inputs9[1].checked) {
        score += 1;
    }

    fetch('/quiz.html', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({quizScore: score})
    })
    .catch(error => {
        console.log('Error: ', error);
    });

});

let userScore;
let userScoreIndex = document.cookie.indexOf('userScore=');
userScore = document.cookie.substring(userScoreIndex + 10);
console.log(userScore);

if (userScore && userScore != -1) {
    submit.disabled = true;
    setTimeout(function () {
        alert("You already took this quiz and got a score of: " + userScore);
    }, 100);
    
}

if (userScore && userScore == -1) {
    submit.disabled = true;
    setTimeout(function () {
        alert("Please sign in first!");
    }, 100);
    
}