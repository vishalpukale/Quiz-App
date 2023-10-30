let JSquestions = [
    {
        numb: 1,
        question: "Which type of JavaScript language is ___",
        answer: "Object-Based",
        options: [
          "Object-Oriented",
          "Object-Based",
          "Assembly-language",
          "High-level"
        ]
    },
    {
        numb: 2,
        question: "When interpreter encounters an empty statements, what it will do:",
        answer: "Ignores the statements",
        options: [
          "Shows a warning",
          "Prompts to complete the statement",
          "Throws an error",
          "Ignores the statements"
        ]
    },
    {
        numb: 3,
        question: "The function and var are known as:",
        answer: "Declaration statements",
        options: [
          "Keywords",
          "Data types",
          "Declaration statements",
          "Prototypes"
        ]
    },
    {
        numb: 4,
        question: "Which is the correct way for calling the JavaScript code?",
        answer: "Function/Method",
        options: [
          "HTMPreprocessorL",
          "Triggering Event",
          "RMI",
          "Function/Method"
        ]
    },
    {
        numb: 5,
        question: "Which of the following type of a variable is volatile?",
        answer: "Mutable variable",
        options: [
          "Mutable variable",
          "Dynamic variable",
          "Volatile variable",
          "Immutable variable"
        ]
    },
    {
        numb: 6,
        question: "Which of the following number object function returns the value of the number?",
        answer: "valueOf()",
        options: [
          "toString()",
          "valueOf()",
          "toLocaleString()",
          "toPrecision()"
        ]
    },
    {
        numb: 7,
        question: "In JavaScript the x===y statement implies that:",
        answer: "Both are equal in the value and data type.",
        options: [
          "Both x and y are equal in value.",
          "Both are x and y are equal in value only.",
          "Both are equal in the value and data type.",
          "Both are not same at all."
        ]
    },
    {
        numb: 8,
        question: "In JavaScript, what is used for calling function definition expression:",
        answer: "Function literal",
        options: [
          "Function prototype",
          "Function literal",
          "Function calling",
          "Function declaration"
        ]
    },
    {
        numb: 9,
        question: "Which of the following is the property of primary expression:",
        answer: "stand-alone expressions",
        options: [
          "Contains only keywords",
          "basic expressions containing all necessary functions",
          "contains variable references alone",
          "stand-alone expressions"
        ]
    },
    {
        numb: 10,
        question: "The new Point(3,2), is a kind of _______ expression",
        answer: "Object Creation Expression",
        options: [
          "Object Creation Expression",
          "Primary Expression",
          "Invocation Expression",
          "Constructor Calling Expression"
        ]
    },

]




// script for the javascript question quiz

const JSstart_btn = document.querySelector(".interest_session .interests>.btn2");

JSstart_btn.onclick = () => {
    alert("JS Quiz")
    info_box.classList.add("activeInfo");
    container__home.style.display = "none";
}


// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < JSquestions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}


// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ JSquestions[index].numb + ". " + JSquestions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ JSquestions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ JSquestions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ JSquestions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ JSquestions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = JSquestions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}




function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box


    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! 🎉, You got <p>'+ userScore +'</p> out of <p>'+ JSquestions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>and nice 😎, You got <p>'+ userScore +'</p> out of <p>'+ JSquestions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>and sorry 😐, You got only <p>'+ userScore +'</p> out of <p>'+ JSquestions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}



function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = JSquestions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}


function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ JSquestions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}