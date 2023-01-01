'use strict';


let player1Score = 0;
let updatePlayer1Score = function(player1Score){
    document.querySelector('#score--0').textContent = player1Score;
}
updatePlayer1Score(player1Score);


let player2Score = 0;
let updatePlayer2Score = function(player2Score){
    document.querySelector('#score--1').textContent = player2Score;
}
updatePlayer2Score(player2Score);


let player1Current = Number(document.querySelector('#current--0').textContent);
let updatePlayer1Current = function(answer){
    document.querySelector('#current--0').textContent = answer;
}


let player2Current = Number(document.querySelector('#current--1').textContent);
let updatePlayer2Current = function(answer){
    document.querySelector('#current--1').textContent = answer;
}


let player1 = true;
let player2 = false;
let playing = true;

let dice = document.querySelector('.dice');
dice.classList.add('hidden');

let diceRoll = function(){
    if(playing){
    let diceNumber =  Math.trunc(Math.random()*6+1);
    console.log(diceNumber);
    
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNumber}.png`;

    if(diceNumber !== 1 && player1){
        player1Current = player1Current+diceNumber;
        updatePlayer1Current(player1Current);
    }

    if(diceNumber !== 1 && player2){
        player2Current = player2Current+diceNumber;
        updatePlayer2Current(player2Current);
    }

    if(diceNumber === 1 && player1){
        player1 = false;
        player2 = true;
        document.querySelector('.player--0').classList.remove('player--active');
        document.querySelector('.player--1').classList.add('player--active');
        player1Score = player1Score+player1Current;
        updatePlayer1Score(player1Score);
        
        if(player1Score >= 100){
            document.querySelector('.player--0').classList.add('player--winner');
            playing = false;
        }
        player1Current = 0;
        updatePlayer1Current(0);
    }else if(diceNumber === 1 && player2){
        player1 = true;
        player2 = false;
        document.querySelector('.player--1').classList.remove('player--active');
        document.querySelector('.player--0').classList.add('player--active');
        player2Score = player2Score+player2Current;
        updatePlayer2Score(player2Score);
        if(player2Score >= 100){
            document.querySelector('.player--1').classList.add('player--winner');
            playing = false;
        }
        player2Current = 0;
        updatePlayer2Current(0);
    }
}
}
document.querySelector('.roll').addEventListener('click',diceRoll);

let reset = function(){
    playing = true;
  updatePlayer1Score(0);
  updatePlayer2Score(0);
  updatePlayer1Current(0);
  updatePlayer2Current(0);
  dice.classList.add('hidden');
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');

  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.add('player--active');
}

document.querySelector('.btn--new').addEventListener('click', reset);


// I need to implement the hold button