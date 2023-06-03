

function computerMove() {
    
    var computerChoice = Math.floor(Math.random() * 10);


    return computerChoice;

}

const score = {

    win: 0,
    lose: 0,
    tie: 0

}


function playRound(user_input, computerChoice) {

        var computer_choice = computerChoice
        var user_choice = user_input
        if (user_input === computerChoice) {

            output = "You lose! Hehe";
            score.lose += 1;
        } else if (user_input - computerChoice < 0) {
            
            output = "You tie! Try again next time";
            score.tie += 1;

        }
        
        if (user_input  != computerChoice) {
            output = "You win! Yay";
            score.win += 1; 

        }


        return user_choice + " "  + computer_choice + " " + output + " " + 
        "The current score is " + "Wins: " + score.win + " Loses: " + score.lose + " Ties: " + score.tie;

        

}



