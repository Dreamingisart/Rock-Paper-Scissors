let userScore = 0;
let compScore= 0;

const choices = document.querySelectorAll(".choice")
let msg = document.querySelector("#msg")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]
}

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gameDraw = () => {
    console.log("Game was a draw")
    msg.innerText = "Game was a draw!"
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win!. Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You loose!. Your ${userChoice} looses to ${compChoice}`
        msg.style.backgroundColor = "red"
    }
}

// Choices function
const playGame = (userChoice) => {

    // User Choice
    console.log("User choice = ", userChoice);

    // Comp Choice
    const compChoice = genCompChoice()
    console.log(`Comp choice = ${compChoice}`);

    // Draw game
    if (userChoice === compChoice) {
        gameDraw()
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})