/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, currentScore;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = "none"; 

function displayCurrent(){
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
} 

function diceRoll(){
    document.querySelector('.dice').style.display = 'block';
    holder =  Math.floor(Math.random() * 6) + 1; 
    document.querySelector('.dice').src = "dice-" + holder + ".png"; 
    if(holder != 1 && activePlayer == 0) {
        roundScore += holder;
        displayCurrent();
    } else if(holder != 1 && activePlayer == 1){
        roundScore += holder;
        displayCurrent();
    } else{
        if(activePlayer == 0){
            roundScore = 0;
            displayCurrent();
            activePlayer = 1;
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.add('active');
        } else{
            roundScore = 0;
            displayCurrent();
            activePlayer = 0;
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
        }
    }
}

function hold(){
        if(activePlayer == 0){
            if(scores[activePlayer] < 100){
                scores[activePlayer] += roundScore;
                document.querySelector('#score-0').textContent = scores[activePlayer];
                roundScore = 0;
                displayCurrent();
                activePlayer = 1;
                document.querySelector('.player-0-panel').classList.remove('active');
                document.querySelector('.player-1-panel').classList.add('active');
            }else if(scores[activePlayer] >= 100){
                console.log('you won player one');
            }
        } else{
            if(scores[activePlayer] < 100){
                scores[activePlayer] += roundScore;
                document.querySelector('#score-1').textContent = scores[activePlayer];
                roundScore = 0;
                displayCurrent();
                activePlayer = 0;
                document.querySelector('.player-1-panel').classList.remove('active');
                document.querySelector('.player-0-panel').classList.add('active');
            }else if(scores[activePlayer] >= 100){
                console.log('you won player two');
            }
        }
       return scores;

}


function newGame(){
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    activePlayer = 0;
}




