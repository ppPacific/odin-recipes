//adding const
//getelementbyid
// const optionBtn = document.querySelectorAll('div.optionBtn button');
// const roundResults = document.querySelector('#roundResults');
// const playerPoints = document.querySelector('#playerScore');
// const computerPoints = document.querySelector('#computerScore');
// const resetBtn = document.querySelector('#reset');
const resultis = document.querySelector('#resultis');
const content = document.createElement('div');
content.classList.add('content');

let result = 'haluhhhhhhhh';
content.textContent = result;
resultis.appendChild(content);




const getCompChoice=()=>{
    let ans = Math.floor(Math.random() * 9)
    if (ans>=0 && ans<=2){
        ans = 'Rock';
        return ans;
    } else if (ans>=3 && ans<=5){
        ans = 'Paper';
        return ans;
    } else if (ans>=6 && ans<=8){
        ans = 'Scissors';
        return ans;
    }
}

let pscores = 0;
let cscores = 0;
const playRound=(playerSelection, computerSelection)=>{
    if (playerSelection === computerSelection){
        result = 'Tie!';
        console.log(playerSelection,computerSelection,result);
        return result;
    } else if(playerSelection==='Rock'){
        if (computerSelection==='Scissors'){
            result = 'You Wooonn! Rock beats Scissors';
            pscores+=1;
            console.log(playerSelection,computerSelection,result);
            return result;
        } else { result = 'You Loooose! Paper beats Rock';
            cscores+=1;
            console.log(playerSelection,computerSelection,result);
            return result;}

    } else if(playerSelection==='Scissors'){
        if (computerSelection==='Rock'){
            result = 'You Loooose! Rock beats Scissors';
            cscores+=1;
            console.log(playerSelection,computerSelection,result);
            return result;
        } else { result = 'You Wooonn! Scissors beats Paper';
            pscores+=1;
            console.log(playerSelection,computerSelection,result);
            return result;}
    }else if(playerSelection==='Paper'){
        if (computerSelection==='Rock'){
            result = 'You Wooonn! Paper beats Rocks';
            pscores+=1;
            console.log(playerSelection,computerSelection,result);
            return result;
        } else { result = 'You Loooose! Scissors beats Paper';
            cscores+=1;
            console.log(playerSelection,computerSelection,result);
            return result;
        }
    }

}



if (pscores > cscores) {
    console.log('You won!');
    console.log(result)
} else if (cscores > pscores) {
    console.log('You lost!');
    console.log(result)
} else {
    console.log('Tie!!!');
    console.log(result)
}
