// toglogchiin eelj

var activePlayer = 0;

// Toglogchdiin tsugluulsan onoo

var scores = [0, 0];


document.querySelector('#score-0').textContent = 0;

document.querySelector('#score-1').textContent = 0;

// Toglogchiin eeljindee tsugluulsan onoo-g haruulna

var diceDom = document.querySelector('.dice');
diceDom.style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', ShooShid);

var roundScore=0 ;

function ShooShid() {

    var diceNum = Math.floor(Math.random() * 6) + 1;

    diceDom.style.display = 'block';

    diceDom.src = "dice-" + diceNum + ".png";

    document.querySelector('#score-' + activePlayer).textContent = diceNum;

    if (diceNum!==1) {
        roundScore = roundScore + diceNum; 
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {     
        roundScore = 0; 
        document.querySelector('#score-' + activePlayer).textContent = 0;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');

    }
}