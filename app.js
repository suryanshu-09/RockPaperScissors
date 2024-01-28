let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

let userScorePara = document.querySelector("#user-score")
let compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randIDx = Math.floor(Math.random() * 3)
    return options[randIDx]
}

const drawGame = () =>{
    //console.log("game was draw.");
    msg.innerText = "game was draw, play again"
    msg.style.backgroundColor = "yellow"
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        //console.log("you win");
        userScore++
        userScorePara.innerText = userScore
        msg.innerText = `you win! ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }else{
        //console.log("you lose");
        compScore++
        compScorePara.innerText = compScore
        msg.innerText = `you lose! ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
    //console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    //console.log("comp choice = ", compChoice);
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true
        }else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true
        }else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin, userChoice, compChoice)
    }
}

choices.forEach((choice) => {
    //console.log(choice);
    const userChoice = choice.getAttribute("id")
    choice.addEventListener("click", () => {
        //console.log("choice was clicked", userChoice);
        playGame(userChoice)
    })
})
