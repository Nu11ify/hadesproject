let getUserChoice=userInput => {
    userInput=userInput.toLowerCase();
    if (userInput==='rock' || userInput==='paper' || userInput==='scissor' || userInput==='bomb') {
        return userInput;
      } else {
          console.log('Error')
      }
  };
  
  let getComputerChoice = () => {
    let randomNumber=Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
    }
};

let determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Tie!';
    };
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Loss. Computer won';
        } else {
            return 'Win. Computer lost';
        }
    };
    
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Loss. Computer won';
        } else {
            return 'Win. Computer lost';
        }
    };

    if (userChoice === 'paper') {
        if (computerChoice ==='scissors') {
            return 'Loss. Computer won';
        } else {
            return 'Win. Computer lost';
        }
    };

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Loss. Computer won';
        } else {
            return 'Win. Computer lost';
        }
    };
    
    if (userChoice === 'bomb') {
        return 'Nuke'; 
    }
};

let playGame=() => {
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
    console.log('You chose ' + userChoice);
    console.log('Computer chose ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame()