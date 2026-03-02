console.log("Hello, World!");

function getComputerChoice() {
    const randomNumber = Math.random();
    console.log(randomNumber);
    if(randomNumber <= 0.33) {
        return "rock";
    } else if(randomNumber <= 0.66) {
        return "paper";
    } else {
        return "scissor";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Choose: rock, paper or scissor")
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {

    if(humanChoice === computerChoice) {
        return "draw";
    } else if(humanChoice === "rock" && computerChoice === "scissor") {
        return "human";
    } else if(humanChoice === "paper" && computerChoice === "rock") {
        return "human";
    } else if(humanChoice === "scissor" && computerChoice === "paper") {
        return "human";
    } else {
        return "computer";
    }
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    while((humanScore + computerScore) < 5) {

        console.log("-------------- New Round --------------");

        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        console.log("computerSelection: " + computerSelection);
        console.log("humanSelection: " + humanSelection);

        const winner = playRound(humanSelection, computerSelection);
        if (winner === "draw") {
            console.log("The game is a Draw!");
        } else if (winner === "human") {
            console.log(`You win! ${humanSelection} beats ${computerSelection}`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
            computerScore++;
        }

        console.log(`humanScore = ${humanScore} || computerScore = ${computerScore}`);
    }
}

playGame();