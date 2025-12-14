let userScore = 0;
let compScore = 0;
    const choices = document.querySelectorAll(".choice");
    const msg = document.querySelector("#result");
    const userScorePara = document.querySelector("#user-score");
     const compScorePara = document.querySelector("#com-score");
      const WIN_SCORE = 15;
      const restartBtn = document.querySelector("#restart");

    

    const genComChoice = () => {
      const options =["rock","paper","scissors"];
      const randIdx = Math.floor(Math.random()*3);
      return options[randIdx];
    }
      const drawGame = () =>{
        console.log("game was draw.");
        msg.innerText = "Game was Draw. Play again";
        msg.style.backgroundColor = "pink";
      }
      const showWinner =(userWin ,userChoice ,compChoice)=>{
          if(userWin){
             userScore++;
             userScorePara.innerText = userScore;
            msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor ="green";
          }else {
            compScore++;
             compScorePara.innerText = compScore;
             msg.innerText = `you lose  ${compChoice} beats your ${userChoice} `;
            msg.style.backgroundColor ="red";

          }
          checkGameOver();


      };
      const checkGameOver = () => {
    if (userScore === WIN_SCORE) {
        msg.innerText = "🎉 You Won the Game!";
        msg.style.backgroundColor = "green";
        endGame();
    } 
    else if (compScore === WIN_SCORE) {
        msg.innerText = "😢 Computer Won the Game!";
        msg.style.backgroundColor = "red";
        endGame();
    }
};
    const endGame = () => {
    choices.forEach(choice => {
        choice.style.pointerEvents = "none";
    });
    restartBtn.style.display = "inline-block";
};



     const playGame = (userChoice) => {
        console.log("user choice = ", userChoice);
        const compChoice = genComChoice();
        console.log("comp choice = " , compChoice);
        if(userChoice === compChoice) {
            //draw game
            drawGame();
        } else {
            let userWin = true;
            if(userChoice==="rock"){
                userWin = compChoice==="paper"?false : true;
            }
            else if(userChoice==="paper"){
                userWin= compChoice ==="scissors"?false : true;
            }
            else {
                userWin= compChoice==="rock"? false : true;
            }
           showWinner(userWin , userChoice,compChoice);
        }
     };
    choices.forEach((choice)=>{
        choice.addEventListener("click",() => {
            const userChoice =choice.getAttribute("id");
           // console.log("choice was clicked" , userChoice)
           playGame(userChoice);

        });
    });
    restartBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;

    userScorePara.innerText = 0;
    compScorePara.innerText = 0;

    msg.innerText = "Make your move!";
    msg.style.backgroundColor = "rgb(227, 138, 227)";

    choices.forEach(choice => {
        choice.style.pointerEvents = "auto";
    });

    restartBtn.style.display = "none";
});
