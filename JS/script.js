// function calls when user enter a name and welcome the user 

const array = [];
function welcomeAlert() {
    // if and then condn used to get the user name
    const userName = document.getElementById('userName');

    // storing the user name inside array and use it to welcome user

    let printRes = document.getElementById('printRes');
    printRes.innerHTML = "Congratulations " + userName.value;

    // clear the input field
}



//Importing all required elements
const FSstart_btn = document.querySelector(".interest_session .interests>.btn1");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quizPage");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list"); 
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timerSport .time_left");
const timeCount = document.querySelector(".timerSport .timerSec");

const container__home = document.querySelector('.container__home');



exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
    container__home.style.display = ""; 
}

continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}


let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;


const restart_quiz = result_box.querySelector('.buttons .start_again');
const quit_quiz = result_box.querySelector('.buttons .goToHome');


restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}


quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}


const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");






// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';













function startTimerLine(time){
    counterLine = setInterval(timer, 159);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "%"; //increasing width of time_line with px by time value
        if(time > 99){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

