var answers = ["A","C","C","A","D","B","A","C","B","D"]; //list of correct answers
var tot = answers.length;

function getQuestion(questionName){ //gets the answer for a particular question name to compare against the answers array
    var radios = document.getElementsByName(questionName);
    for (j = 0; j < radios.length; j++)
        if (radios[j].checked) return radios[j].value; //only returns the radio input if the circle was checked by the user
}

function getScore(){
    var score = 0;
    for (i = 0; i < tot; i++){
        if (getQuestion("question" + i) == answers[i]) ++score; //adds score for each input retured that matches the answers array
    }
    document.getElementById("myResults").innerHTML = "Your score is " + score + "/" + tot; //output for user or else they wouldn't know what their score was
}