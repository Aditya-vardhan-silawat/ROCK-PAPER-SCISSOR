let userscore = 0;
let computerscore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userscoreboard = document.querySelector("#user")
let computerscoreboard = document.querySelector("#computer")

const gencomputerchoice = () => {
    const options = ["ROCK" , "PAPER", "SCISSOR"];
    let index = Math.floor(Math.random() * 3);
    return options[index];
}

const drawgame = () => {
    msg.innerHTML = "<i>MATCH DRAWN 🤥, PLAY AGAIN 🔁 </i>"
    msg.style.backgroundColor = "#235789"
}


const showwinner = (userwin , userchoice , computerchoice ) => {
    if(userwin){
        userscore ++;
        userscoreboard.innerText = userscore;
        msg.innerHTML = `<i>YOU WIN 🤩 </i> ${userchoice} beats ${computerchoice}`
        msg.style.backgroundColor = "green"
    }else{
        computerscore ++;
        computerscoreboard.innerText = computerscore;
        msg.innerHTML = `<i><b>YOU LOST ☹️ </b></i> ${computerchoice} beats ${userchoice}`
        msg.style.backgroundColor = "red"
    }
}


const playgame = (userchoice) => {
    
    const computerchoice = gencomputerchoice(); 


    if(computerchoice === userchoice){
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "ROCK"){
            userwin = computerchoice === "PAPER" ? false : true; 
        }else if (userchoice === "PAPER"){
            userwin = computerchoice === "SCISSOR" ? false : true;
        }else{
            userwin = computerchoice === "ROCK" ? false : true;
        }
        showwinner(userwin , userchoice , computerchoice);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice)
    })
})