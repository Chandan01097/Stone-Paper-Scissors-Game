let UserScore = 0;
let ComScore = 0;
let message = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice"); 

const drawGame = () => {
  console.log("The game was a draw!");
};

const compgenChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};

const winner = (UserWin,userChoice,comchoice) => {
  if (UserWin) {
    console.log("You win!");
    message.innerText = `You win ! your ${userChoice} beats ${comchoice}`;
    message.style.backgroundColor = "green"; // or any color you want
    UserScore++;
  } else {
    console.log("Computer wins!");
    message.innerText = `You lose !  ${userChoice} beaten by ${comchoice}`;
    message.style.backgroundColor = "red"; // or any color you want
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
    winner(UserWin,userChoice,comchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgames(userChoice);
  });
});
