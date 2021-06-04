Player1_name = localStorage.getItem("Player1_name");
Player2_name = localStorage.getItem("Player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("Player1_name").innerHTML = Player1_name + " : ";
document.getElementById("Player2_name").innerHTML = Player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("question_turn").innerHTML = "Question Turn - " + Player1_name;
document.getElementById("answer_turn").innerHTML = "Answer Turn - " + Player2_name;

function Send() {
    Number1 = document.getElementById("multiplication1").value;
    Number2 = document.getElementById("multiplication2").value;
    equation = parseInt(Number1) * parseInt(Number2);
    console.log(equation);
}
