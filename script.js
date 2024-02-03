let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

console.log(generateTarget());

function compareGuesses(humanGuess, computerGuess, secretGuess) {
  const humanPoints = Math.abs(secretGuess - humanGuess);
  const computerPoints = Math.abs(secretGuess - computerGuess);

  return humanPoints <= computerPoints;
}

const updateScore = winner => {
  winner === "human" ? humanScore++ : computerScore++;
};

const advanceRound = () => {
  currentRoundNumber++;
};

