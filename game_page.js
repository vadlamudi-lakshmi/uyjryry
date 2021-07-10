player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " :";
document.getElementById("player2_name").innerHTML = player2_name + " :";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question_Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer_Turn - " + player2_name;

function send() {
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_word = "<h5 id='word_display'> Q. "+number1 + "X" + number2+"</h5>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word+ input_box+ check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}
function check()
     {
getword=document.getElementById("input_check_box").value;
answer=getword.toLowerCase();
console.log("answer"+answer);
if(answer==word)
{
    if(answer_turn=="number_1")
{
    playerscore1=playerscore1+1;
    document.getElementById("playerscore1").innerHTML=playerscore1;
}
else{
    playerscore2=playerscore2+1;
    document.getElementById("playerscore2").innerHTML=playerscore2;

}
}
if(question_turn=="number_1")
{
       question_turn="number_2";
       document.getElementById("player_question").innerHTML="question_turn :"+player2_name;

}
else{
    question_turn="number_1";
    document.getElementById("player_question").innerHTML="question_turn :"+player1_name;


}
if(answer_turn=="number_1")
{
       answer_turn="number_2";
       document.getElementById("player_answer").innerHTML="answer_turn:"+player2_name;
       

}
else{
    question_turn="number_1";
    document.getElementById("player_question").innerHTML="answer_turn :"+player1_name;


}
     }
 
     

