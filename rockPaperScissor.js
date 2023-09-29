const opponent = ["rock","paper","scissors"];
let playerSelection
let computerSelection = getComputerChoice();
let comWins=0
let playWin=0
function getComputerChoice(){
    let opponentsChoice = Math.floor(Math.random()*3);
     return opponent[opponentsChoice];
}
function round(playerSelection,computerSelection){

    if(playerSelection=="rock"&&computerSelection=="scissors"){
        return "You win rock beats scissors"
    }else if(playerSelection=="paper"&&computerSelection=="rock"){
        return "You win paper beats rock"
    }else if (playerSelection=="scissors"&&computerSelection=="paper"){
        return "You win scissors beat paper"
    }else if(playerSelection==computerSelection){
        return "Draw"
    }else {
        return "Computer wins"
    }
}
function game(){
    for (let i=0;i<5;i++){  
        playerSelection = prompt("rock,paper,scissors?")
    console.log(round(playerSelection,computerSelection)); 
    if(round(playerSelection,computerSelection)=="Computer wins"){
        comWins+=1;
    }else if(round(playerSelection,computerSelection)=="You win rock beats scissors"||round(playerSelection,computerSelection)=="You win paper beats rock"||round(playerSelection,computerSelection)=="You win scissors beat paper"){
        playWin+=1
    }
    }
}
game();
console.log("computer " + comWins + " : " + " player " + playWin);