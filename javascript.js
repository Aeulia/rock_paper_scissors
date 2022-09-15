function getComputerChoice(){
    const options = ['Rock', 'Paper','Scissors'];
    let computer_random = Math.round((Math.random())*options.length)
    let computer_choice = ''
    if (computer_random == 0 ) {
        computer_choice= 'rock'
    } else if(computer_random==1){
        computer_choice = 'paper'
    } else {
        computer_choice = 'scissors'
    }
    return computer_choice
    }

score = 0
function round(playerSelection, computerSelection){
    computerSelection= getComputerChoice()
    playerSelection=prompt("Please enter rock,paper or scissors")
    console.log(computerSelection)
    if (playerSelection == computerSelection){
        console.log("Draw!")
    } else if (playerSelection == 'rock' && computerSelection =='scissors') {
        console.log("You win! Rock beats scissors!") 
        score=score+1
    } else if (playerSelection =='scissors' && computerSelection =='paper') {
        console.log("You win! Scissors beats paper!")
        score=score+1
    } else if (playerSelection =='paper' && computerSelection=='rock') {
        console.log("You win! Paper beats rock!")
        score=score+1
    } else {
        console.log("You lose!")
    }


}



function playRound(){
    
    for(let i=0;i<5;i++){
        round()
        console.log(`You have a score of ${score}`)
    }
    console.log(`you got a total score of ${score} / 5`)
    if (score <3){
        console.log(`You lost the best of 5`)
    } else {
        console.log('You win the best of 5')
    }
}

playRound()