let introck = document.getElementById(`rock`);
let intpaper = document.getElementById(`paper`);;
let intscissors = document.getElementById(`scissors`);;
let aiinput;
let playerchoice = document.getElementById(`playerchoice`);
let aichoice = document.getElementById(`aichoice`);
let result = document.getElementById(`result`);
let score = 0;
let scoretext = document.getElementById(`score`);
function gameReset(){
    setTimeout(() =>{
        result.textContent = `Resetting in 3...`;
    }, 2000)
    setTimeout(() =>{
        result.textContent = `Resetting in 2...`;
    }, 3000)
    setTimeout(() =>{
        result.textContent = `Resetting in 1...`;
    }, 4000)
    setTimeout(() => {
        result.textContent = 'Game Reset!';
        playerchoice.textContent = `x`;
        aichoice.textContent = `x`;
      }, 5000);
}
function disableButtons(){
    introck.disabled = true;
    intpaper.disabled = true;
    intscissors.disabled = true;
}
function enableButtons(){
    setTimeout(() => {
        introck.disabled = false;
        intpaper.disabled = false;
        intscissors.disabled = false;
      }, 5000);
}

function rockOut(){
    disableButtons();
    rockvalue = introck.value;
    aiinput = Math.floor(Math.random()*3+1);
    console.log(rockvalue);
    let playerChoiceValue = Number(rockvalue);
    
    if(playerChoiceValue == 1 && aiinput == 2){
        playerchoice.textContent = `Rock!`;
        aichoice.textContent = `Paper!`;
        result.textContent = 'You lose!';
    }
    else if(playerChoiceValue == 1 && aiinput == 1){
        playerchoice.textContent = `Rock!`;
        aichoice.textContent = `Rock!`;
        result.textContent = 'Tie!';
    }
    else if (playerChoiceValue == 1 && aiinput == 3){
        playerchoice.textContent = `Rock!`;
        aichoice.textContent = `Scissors!`;
        result.textContent = 'You win!';
        score++;
        scoretext.textContent = `Score: ${score}`;
    }
    gameReset();
    enableButtons()
}
function paperOut(){
    disableButtons();
    papervalue = intpaper.value;
    aiinput = Math.floor(Math.random()*3+1);
    console.log(papervalue);
    let playerChoiceValue = Number(papervalue);
    
    if(playerChoiceValue == 2 && aiinput == 2){
        playerchoice.textContent = `Paper!`;
        aichoice.textContent = `Paper!`;
        result.textContent = 'Tie!';
    }
    else if(playerChoiceValue == 2 && aiinput == 1){
        playerchoice.textContent = `Paper!`;
        aichoice.textContent = `Rock!`;
        result.textContent = 'You win!';
        score++;
        scoretext.textContent = `Score: ${score}`;
    }
    else if (playerChoiceValue == 2 && aiinput == 3){
        playerchoice.textContent = `Paper!`;
        aichoice.textContent = `Scissors!`;
        result.textContent = 'You lose!';
    }
    gameReset();
    enableButtons()
}
function scissorOut(){
    disableButtons();
    scissorsvalue = intscissors.value;
    aiinput = Math.floor(Math.random()*3+1);
    console.log(scissorsvalue);
    let playerChoiceValue = Number(scissorsvalue);
    
    if(playerChoiceValue == 3 && aiinput == 2){
        playerchoice.textContent = `Scissors!`;
        aichoice.textContent = `Paper!`;
        result.textContent = 'You win!';
        score++;
        scoretext.textContent = `Score: ${score}`;
    }
    else if(playerChoiceValue == 3 && aiinput == 1){
        playerchoice.textContent = `Scissors!`;
        aichoice.textContent = `Rock!`;
        result.textContent = 'You lose!';
    }
    else if (playerChoiceValue == 3 && aiinput == 3){
        playerchoice.textContent = `Scissors!`;
        aichoice.textContent = `Scissors!`;
        result.textContent = 'Tie!';
    }
    gameReset();
    enableButtons()
}