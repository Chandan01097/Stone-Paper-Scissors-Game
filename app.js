let UserScore = 0;
let ComScore = 0;

const choices = document.querySelectorAll(".choice"); 

const drawGame = () => {
  console.log("The game was a draw!");
};

const compgenChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};

const winner = (UserWin) => {
  if (UserWin) {
    console.log("You win!");
    UserScore++;
  } else {
    console.log("Computer wins!");
    ComScore++;
  }
  document.querySelector("#yscore").textContent = UserScore;
  document.querySelector("#cscore").textContent = ComScore;
};

const playgames = (userChoice) => {
  console.log("User Choice is:", userChoice);
  const comchoice = compgenChoice();
  console.log("Computer Choice is:", comchoice);

  if (userChoice === comchoice) {
    drawGame();
  } else {
    let UserWin = true;
    if (userChoice === "rock") {
      UserWin = comchoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      UserWin = comchoice === "scissors" ? false : true;
    } else if (userChoice === "scissors") {
      UserWin = comchoice === "rock" ? false : true;
    }
    winner(UserWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgames(userChoice);
  });
});
