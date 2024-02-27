const getUserChoice = (userInput) =>{
    userInput = userInput.toLowerCase();
    if(userInput === 'Zapdos'||userInput === 'Moltres'||userInput === 'Articuno');{ return userInput;
     } else{
      console.log('Error, please Choose: Zapdos, Articuno or Moltres')
    }

    }
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random()* 3);
 switch (randomNumber) {
 case 0:
  return 'Zapdos';
  case 1:
    return 'Moltres';
    case 2:
      return 'Articuno';
}
 }
 const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return 'The game is a Tie!';
  }
  if (userChoice === 'Zapdos'){
    if (computerChoice === "Moltres"){
      return 'Sorry, The Computer folded you like you were laundry'
    } else {
      reutrn 'ConGrats! You beat the Computer!'
    }
  }
 }