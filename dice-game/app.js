// Global variables
var activePlayer=0, scores, roundScore, isNewGame;
var diceDom = document.querySelector('.dice');
// Initializing the game
initGame();

// Add event listener to the start game
document.querySelector('.btn-new').addEventListener('click', initGame);

//Function to initialize the game

function initGame(){
    document.querySelector(".player-" + activePlayer + "-panel").classList.remove("winner");
    diceDom.style.display = 'none'; // dice-g hide hiine
    activePlayer = 0; // activePlayer-iig 0 bolgono
    scores = [0, 0]; // scores-iig 0 bolgono
    roundScore = 0; // roundScore-iig 0 bolgono
    isNewGame = true; // Togloom duuslaa bish bolgono

    document.querySelector('.player-0-panel').classList.add('active'); // 0-r toglogch active bolgono
    document.querySelector('.player-1-panel').classList.remove('active'); // 1-r toglogch active bish bolgono

    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;

    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;

    // Тоглогчдын нэрийг буцааж гаргах
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
}
// Function to roll the dice

document.querySelector('.btn-roll').addEventListener('click', function(){

    if(isNewGame){
      var diceNum = Math.floor(Math.random()*6)+1;
    diceDom.style.display='block';
    diceDom.src="dice-"+diceNum+".png";

     if (diceNum!==1) {
        roundScore = roundScore + diceNum; 
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {     
        roundScore = 0; 
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        switchPlayer();
    }
    } else {
        alert("Game Over! Please start a new game.");
    }
    
});


// Function to hold the score 

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (!isNewGame) {
        alert("Game Over! Please start a new game.");
        return;
    } else{
        scores[activePlayer] += roundScore; // activePlayer-ees roundScore-iig nemeh
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer] 
        winnerCheck();  
    }
});

// Function to switch player 
function switchPlayer(){
        roundScore = 0; // roundScore-iig 0 bolgono
        document.querySelector('#current-' + activePlayer).textContent = roundScore; // current score-iig 0 bolgono
        // Toglogchdiin panel-iig solino
        document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
}

// Function to winner check
function winnerCheck() {
    if (scores[activePlayer] >= 10) {
        document.querySelector('#name-'+activePlayer).textContent="Winner!";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        isNewGame = false; // Togloom duuslaa

    } else {
        switchPlayer();
    }
}
