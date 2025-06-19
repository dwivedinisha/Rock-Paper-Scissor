let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    let options = ["rock","paper","scissor"];
    const randomindex =  Math.floor(Math.random()*3);
    return options[randomindex];
};


const drawGame = () => {
    console.log("game was drawn");
    msg.innerText = "Game drawn. Play Again";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
};

const showWinner = (userwin,userchoice,compchoice) => {
    if (userwin) {
        userScore++;
        userScorePara.innerText = userScore;

        console.log("you win");
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "black";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `You lose. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "black";
    }
    
};



const playgame = (userchoice) => {
    console.log("user choice = ",userchoice);
    const compchoice = genCompChoice();
    console.log("comp choice = ",compchoice);
    
    if(userchoice === compchoice){
        drawGame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            //scissor,paper
            userwin = compchoice === "paper"? false : true;
        } else if(userchoice === "paper"){
            //rock,scissor
            userwin = compchoice === "scissor"? false : true;
        } else{
            //rock,paper
            userwin = compchoice === "rock"? false : true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
    
    }

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);
        
    })
}
)