let userScore=0;
let computerscore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result>p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function convertToWord(letters){
if(letters=="r") return "Rock";
if(letters=="p") return "Paper";
if(letters=="s") return "Scissor";	
}


function getComputerChoice(){
const choices=['r','p','s'];
const randomNumber=Math.floor(Math.random()*3);
return choices[randomNumber];	
}

function win(userChoice,computerChoice){
userScore++;	
userScore_span.innerHTML=userScore;	
computerScore_span.innerHTML=computerscore;	
result_p.innerHTML=convertToWord(userChoice)+" beats "+convertToWord(computerChoice)+" you WIN!!";
	}

function draw(userChoice,computerChoice){
result_p.innerHTML='DRAW!!"'
	}
	
function lose(userChoice,computerChoice){
computerscore++;	
computerScore_span.innerHTML=computerscore;	
computerScore_span.innerHTML=computerscore;	
result_p.innerHTML=convertToWord(computerChoice)+" beats "+convertToWord(userChoice)+" you LOOSE!!";
	}	
function game(userChoice){
const computerChoice=getComputerChoice();

document.getElementById('user-label').innerHTML = 'User: <br>'+ convertToWord(userChoice);
document.getElementById('computer-label').innerHTML = 'Comp: <br>'+convertToWord(computerChoice);
switch(userChoice+computerChoice){
case "rs":
case "pr":	
case "sp":	
	win(userChoice,computerChoice);
	break;	
case "rp":	
case "ps":
case "sr":
	lose(userChoice,computerChoice);
	break;	
case "rr":
case "pp":	
case "ss":
	draw(userChoice,computerChoice);
	break;	
	}

}
function main(){
rock_div.addEventListener(
'click',function(){
	game("r");
	console.log('r');
});
	
paper_div.addEventListener('click',function(){
	game("p");
	console.log('p');
});
	
scissor_div.addEventListener('click',function(){
	game("s");
	console.log('s');
});
	
}	
main();
