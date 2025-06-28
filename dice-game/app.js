// toglogchiin eelj

var activePlayer = 0;

// Toglogchdiin tsugluulsan onoo

var scores = [0, 0];

// Toglogchiin eeljindee tsugluulsan onoo

var roundScore = 0;

// Buusan shoonii too


document.querySelector('#score-0').textContent = 0;

document.querySelector('#score-1').textContent = 0;

// Toglogchiin eeljindee tsugluulsan onoo-g haruulna

var diceDom = document.querySelector('.dice');
diceDom.style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', ShooShid);

function ShooShid() {

    var diceNum = Math.floor(Math.random() * 6) + 1;

    diceDom.style.display = 'block';

    diceDom.src = "dice-" + diceNum + ".png";
}