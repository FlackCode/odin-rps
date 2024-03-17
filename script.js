let introck = document.getElementById(`rock`);
let intpaper = document.getElementById(`paper`);;
let intscissors = document.getElementById(`scissors`);;
let playerchoice = document.getElementById(`playerchoice`);
let aichoice = document.getElementById(`aichoice`);
let result = document.getElementById(`result`);
let score = 0;
let playerscoretext = document.getElementById(`playerscore`);
let aiscoretext = document.getElementById(`aiscore`);
let aiscore = 0;
let playerChoiceValue;
function scoreFunc(){
    if (score === 5 || aiscore === 5) {
        console.log(score);
        console.log(aiscore);
        endScreen();
    }
}
function endScreen() {
    document.getElementById(`end-screen`).style.zIndex = `2`;
    const titleText = document.getElementById("titleText");
    titleText.textContent = (score == 5) ? "You Won!" : "You Lost!";
}
function restartPage() {
    location.reload();
}
function buttonOutput(button, PlayerValue){
    const buttonvalue = button.value;
    AiValue = Math.floor(Math.random()*3+1);
    PlayerValue = Number(buttonvalue);
    return { AiValue, PlayerValue };
}
function rockOut(){
    const { AiValue, PlayerValue } = buttonOutput(introck, playerChoiceValue);
    if(PlayerValue == 1 && AiValue == 2){
        playerchoice.textContent = `Rock!`;
        aichoice.textContent = `Paper!`;
        result.textContent = 'You lose!';
        aiscore++;
        aiscoretext.textContent = `AI Score: ${aiscore}`;
    }
    else if(PlayerValue == 1 && AiValue == 1){
        playerchoice.textContent = `Rock!`;
        aichoice.textContent = `Rock!`;
        result.textContent = 'Tie!';
    }
    else if (PlayerValue == 1 && AiValue == 3){
        playerchoice.textContent = `Rock!`;
        aichoice.textContent = `Scissors!`;
        result.textContent = 'You win!';
        score++;
        playerscoretext.textContent = `Your Score: ${score}`;
    }
    scoreFunc();
}
function paperOut(){
    const { AiValue, PlayerValue } = buttonOutput(intpaper, playerChoiceValue);
    if(PlayerValue == 2 && AiValue == 2){
        playerchoice.textContent = `Paper!`;
        aichoice.textContent = `Paper!`;
        result.textContent = 'Tie!';
    }
    else if(PlayerValue == 2 && AiValue == 1){
        playerchoice.textContent = `Paper!`;
        aichoice.textContent = `Rock!`;
        result.textContent = 'You win!';
        score++;
        playerscoretext.textContent = `Your Score: ${score}`;
    }
    else if (PlayerValue == 2 && AiValue == 3){
        playerchoice.textContent = `Paper!`;
        aichoice.textContent = `Scissors!`;
        result.textContent = 'You lose!';
        aiscore++;
        aiscoretext.textContent = `AI Score: ${aiscore}`;
    }
    scoreFunc();
}
function scissorOut(){
    const { AiValue, PlayerValue } = buttonOutput(intscissors, playerChoiceValue);
    if(PlayerValue == 3 && AiValue == 2){
        playerchoice.textContent = `Scissors!`;
        aichoice.textContent = `Paper!`;
        result.textContent = 'You win!';
        score++;
        playerscoretext.textContent = `Your Score: ${score}`;
    }
    else if(PlayerValue == 3 && AiValue == 1){
        playerchoice.textContent = `Scissors!`;
        aichoice.textContent = `Rock!`;
        result.textContent = 'You lose!';
        aiscore++;
        aiscoretext.textContent = `AI Score: ${aiscore}`;
    }
    else if (PlayerValue == 3 && AiValue == 3){
        playerchoice.textContent = `Scissors!`;
        aichoice.textContent = `Scissors!`;
        result.textContent = 'Tie!';
    }
    scoreFunc();
}