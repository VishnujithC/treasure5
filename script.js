// script.js
const correctAnswer = "4"; // Replace with the actual answer

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.toLowerCase();

    if (userAnswer === correctAnswer) {
        document.getElementById("correct").innerHTML = '<h1>Congratulations! You solved the riddle. Clue: Water AB345';
        
    } else {
        document.getElementById("correct").innerHTML = '<h1>Oops.Try again</h1>';
    }
}

// var x= new XMLHttpRequest();
// x.onload = function(){
//     if(x.status===200){

//     }
// };
// x.open('GET',"data/data.html",true);
// x.send(null);