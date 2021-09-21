let secretNumber= Math.floor(Math.random()* 20 + 1);
let score=20;
let highScore=0;

document.querySelector('.btn').addEventListener('click',()=>{
    let think=Number( document.querySelector('.check').value);

    if(think === 0){
        document.getElementById('error').innerHTML='please enter some value';
    }
    else if(think=== secretNumber){
        document.getElementById('error').innerHTML='yes! it is correct';
        document.getElementById('showScore').innerHTML=secretNumber;
        showScore.classList.remove('scoreArea');
        document.querySelector('.container').style.backgroundColor='blue';

        if(score>highScore) {
            highScore=score;
            document.getElementById('showScore').innerHTML=highScore;
            showScore.classList.remove('scoreArea');

        }
    }
    else if(think !== secretNumber){
        if(score>1){
           let msg= think>secretNumber ? "very High":"very low";
           document.getElementById('error').innerHTML=msg;
           score -=1;
           document.getElementById('showScore').innerHTML=score;
           showScore.classList.remove('scoreArea');
        }
        else {
            document.getElementById('showScore').innerHTML="you lost the game";
            showScore.classList.remove('scoreArea');
        }

    }

});