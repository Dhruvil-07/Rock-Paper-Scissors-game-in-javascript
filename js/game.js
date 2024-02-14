// // functionname -> for function store
// //functionname() -> for function call
// //same above rule for arroe function


// NON OPTIMIZED CODE //
// let choice_rock = document.querySelector("#Rock");
// let choice_paper = document.querySelector("#Paper");
// let choice_scissors = document.querySelector("#Scissors");

// let userchoice ;
// let computerchoice;

// let decision = document.querySelector(".decision");

// let user_point = 0;
// let computer_point = 0;

// let user_game_point = document.querySelector(".user_game_score");
// let computer_game_point = document.querySelector(".computer_game_score");



// choice_paper.addEventListener("click",
//     ()=>{
//         userchoice =  choice_paper.getAttribute('id');
//         computerchoice = com_choice();
//         playgame(userchoice,computerchoice);
//     }
// )

// choice_rock.addEventListener("click",
//     ()=>{
//         userchoice =  choice_rock.getAttribute('id');
//         computerchoice = com_choice();
//         playgame(userchoice,computerchoice);
//     }
// );

// choice_scissors.addEventListener("click",
//     ()=>{
//         userchoice =  choice_scissors.getAttribute('id');
//         computerchoice = com_choice();
//         playgame(userchoice,computerchoice);
//     }
// );

// let com_choice = ()=>{
//     let options = ["Rock","Paper","Scissors"];
//     let randomidx = Math.floor(Math.random() * 3);
//     return options[randomidx];
// }


// function playgame(user_choice,computer_choice)
// {
//     let user_stat;

//     console.log(user_choice);
//     console.log(computer_choice);

//     if(user_choice === computer_choice)
//     {
//         decision.innerText = "Game Draw";
//         decision.style.backgroundColor = "#081b31";
//     }
//     else
//     {
//         if(user_choice === "Rock")
//         {
//             user_stat = computer_choice === "Paper" ? false : true;
//         }
//         else if(user_choice === "Paper")
//         {
//             user_stat = computer_choice === "Rock" ? true : false;
//         }
//         else
//         {
//             user_stat = computer_choice === "Rock" ? false : true;
//         }
//     }


//     if(user_stat === true)
//     {
//         decision.innerText = "You Win!";
//         decision.style.backgroundColor = "green";
//         user_point++;
//         user_game_point.innerText = user_point;
//     }
//     else if(user_stat === false)
//     {
//         decision.innerText = "You Lose!";
//         decision.style.backgroundColor = "red";
//         computer_point++;
//         computer_game_point.innerText = computer_point;
//     }
// }


//optimized code
let el = document.querySelectorAll(".choice");
let decision = document.querySelector(".decision");
let user_game_score = document.querySelector(".user_game_score");
let computer_game_score = document.querySelector(".computer_game_score");

let user_choice;
let com_choice;

let user_point = 0;
let computuer_point = 0;


//user choice
el.forEach((val)=>{
    val.addEventListener("click",()=>{
        user_choice = val.getAttribute("id");
        com_choice = computer_choice();
        playgame(user_choice , com_choice);
    });
});


//computer choice
function computer_choice()
{
    let options = ["Rock","Paper","Scissors"];
    let radndom_idx = Math.floor(Math.random() * 3);
    return options[radndom_idx];
}

//decision function for win and lose
function playgame(user_choice , com_choice)
{
    if(user_choice === com_choice)
    {
        decision.innerText = "Game Draw";
        decision.style.backgroundColor = "#081b31";
    }
    else if(user_choice === "Rock")
    {
        com_choice === "Paper" ? set_decision(false) : set_decision(true);
    }
    else if(user_choice === "Paper")
    {
        com_choice === "Rock" ? set_decision(true): set_decision(false);
    }
    else
    {
        com_choice === "Rock" ? set_decision(false) :set_decision(true);
    }
}


//function set decision
function set_decision(value)
{
    if(value === true)
    {
        decision.innerText = `You Win ! ${user_choice} BEAT ${com_choice}` ;
        decision.style.backgroundColor = "green";
        user_point++;
        user_game_score.innerText = user_point;
    }
    else
    {
        decision.innerText = `You Lose! ${user_choice} BEATED BY ${com_choice}`;
        decision.style.backgroundColor = "Red";
        computuer_point++;
        computer_game_score.innerText = computuer_point;
    }
}