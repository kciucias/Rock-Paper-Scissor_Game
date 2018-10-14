var newGameBtn = document.getElementById('newGameButton');
    playGameBtn = document.getElementById('playGameButton');
    playerName = document.getElementById('playerName');
    pickRock = document.getElementById('pickRock');
    pickPaper = document.getElementById('pickPaper');
    pickScissors = document.getElementById('pickScissors');
    gameElements = document.getElementById('gameElements');
    playerPointsDOM = document.querySelector('#playerPoints');
    computerPointsDOM = document.querySelector('#computerPoints');
    gameWinner = document.getElementById('gameWinner');
    playAgainBtn = document.getElementById('playAgainBtn');
    computerPickDOM = document.getElementById('computerPick');
    playerPickDOM = document.getElementById('playerPick');
    roundScoreDOM = document.getElementById('roundScore');
    gameResultDOM = document.querySelector('#gameResult');
    var getNumber;
    var computerPoints = 0;
    var playerPoints = 0;

/*function init() {
    //playerPointsDOM.textContent = '0';
    //computerPointsDOM.textContent = '0'; 
    document.querySelector('#gameElements').style.display = 'none';
    document.querySelector('#gameResult').style.display = 'none';
    playerName.innerHTML ='';
}*/
    gameElements.style.display = 'none';
    playerPointsDOM.textContent = '0';
    computerPointsDOM.textContent = '0';
    document.querySelector('#gameResult').style.display = 'none';


// start a new game
document.getElementById('newGameButton').addEventListener('click', newGame);

function newGame() {
    var name = prompt('Please enter your name');
    if (name != null) {
        playerName.textContent = name;
    }
    gameElements.style.display = 'block';
};

playGameBtn.addEventListener('click', playAgain);
function playAgain() {
    gameElements.style.display = 'block';
    playerName.textContent = 'player';
    playerPointsDOM.textContent = '0';
    computerPointsDOM.textContent = '0';
    gameResult.style.display = 'none';
    newGameButton.style.display = 'block';
}

// player pick 
pickRock.addEventListener('click', function() { playerPick('rock'); });
pickPaper.addEventListener('click', function() { playerPick('paper'); });
pickScissors.addEventListener('click', function() { playerPick('scissors'); });

function getComputerPick() {
    var getNumber = Math.floor(Math.random() * 3);
    if (getNumber == 1) {
        return 'scissors';
    } else if (getNumber == 2) {
        return 'paper';
    } else {
        return 'rock';
    }
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();
    computerPickDOM.innerHTML = '<span class="icon"><i class="fa fa-hand-' + computerPick + '-o" aria-hidden="true"></i></span>' + computerPick;
    playerPickDOM.innerHTML = '<span class="icon"><i class="fa fa-hand-' + playerPick + '-o" aria-hidden="true"></i></span>' + playerPick;
    checkRoundWinner(computerPick, playerPick);
}




function checkRoundWinner(computerPick, playerPick) {
    if (playerPick === "paper" && computerPick === 'rock' ||
        playerPick === "rock" && computerPick === "scissors" ||
        playerPick === "scissors" && computerPick === "paper") {
        roundScoreDOM.innerHTML = 'You won!';
        playerPointsDOM.textContent = playerPoints++;   
    } else if (playerPick === "paper" && computerPick === "paper" ||
        playerPick === "rock" && computerPick === "rock" ||
        playerPick === "scissors" && computerPick === "scissors") {
        roundScoreDOM.innerHTML = 'The result is a tie!';   
    } else { 
        roundScoreDOM.innerHTML = 'Computer won!!';
        computerPointsDOM.textContent = computerPoints++;
    }
    checkGameWinner();
};

function checkGameWinner() {
    if (playerPoints == 3) {
        gameElements.style.display = 'none';
        gameResult.style.display = 'block';
        gameWinner.innerHTML = 'You win!';
    } else if (computerPoints == 3) {
        gameElements.style.display = 'none';
        gameResultDOM.style.display = 'block';
        gameWinner.innerHTML = 'You lose!';
    }
    playGameBtn.style.display = 'block';
    newGameBtn.style.display = 'none';
}






