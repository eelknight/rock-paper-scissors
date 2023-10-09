const opponent = ["rock","paper","scissors"];
let computerSelection 
let comWins=0
let playWin=0


function getComputerChoice(){
    let opponentsChoice = Math.floor(Math.random()*3);
     computerSelection= opponent[opponentsChoice];
}
function round(playerSelection,computerSelection){
    if(comWins===5){
       interface.textContent=`computer wins ${comWins} : ${playWin}`
}else if(playWin===5){
        interface.textContent=`player wins ${playWin} : ${comWins}`

}else
       

        if(playerSelection=="rock"&&computerSelection=="scissors"){
            playWin+=1
            interface.textContent= "You win rock beats scissors "+`player ${playWin} : ${comWins} computer`
        }else if(playerSelection=="paper"&&computerSelection=="rock"){
            playWin+=1
            interface.textContent= "You win paper beats rock "+`player ${playWin} : ${comWins} computer`
        }else if (playerSelection=="scissors"&&computerSelection=="paper"){
            playWin+=1
            interface.textContent= "You win scissors beat paper "+`player ${playWin} : ${comWins} computer`
        }else if(playerSelection==computerSelection){
            interface.textContent= "Draw "+`player ${playWin} : ${comWins} computer`
            comWins+=1
            interface.textContent= `Computer wins ${computerSelection} beats ${playerSelection} `+`player ${playWin} : ${comWins} computer`
        }  
}    

const page= document.querySelector('body');

const interface= document.createElement('div');
page.appendChild(interface);

const btnDiv= document.createElement('div');
page.appendChild(btnDiv)

const rock= document.createElement('button');
const paper= document.createElement('button');
const scissors= document.createElement('button');


btnDiv.append(rock);
btnDiv.append(paper);
btnDiv.append(scissors);

interface.style.display="flex";
interface.style.justifyContent="center";
interface.style.fontSize="24px";
interface.style.margin="16px";

page.style.display="flex";
page.style.justifyContent="space-between";
page.style.flexDirection="column"
page.style.backgroundImage="url(images/ai-generated-8296322_1280.png)"

btnDiv.style.display="flex";
btnDiv.style.justifyContent="space-around";
btnDiv.style.margin="16px";

rock.setAttribute('style','width:200px; height:200px');
rock.style.backgroundImage="url(images/fantasy-159526_1280.png)";
rock.style.backgroundSize="200px 200px";

paper.setAttribute('style','width:200px; height:200px');
paper.style.backgroundImage="url(images/toilet-roll-5042644_1280.png)";
paper.style.backgroundSize="200px 200px";

scissors.setAttribute('style','width:200px; height:200px');
scissors.style.backgroundImage="url(images/hedg-clippers-24249_1280.png)";
scissors.style.backgroundSize="200px 200px";

rock.addEventListener('click',()=>{
    getComputerChoice()
    round("rock",computerSelection);
});

paper.addEventListener('click',()=>{
    getComputerChoice()
    round("paper",computerSelection);
});

scissors.addEventListener('click',()=>{
    getComputerChoice()
    round("scissors",computerSelection);
});
