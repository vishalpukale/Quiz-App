// creating an array and passing the number, questions, options, and answers
let FSquestions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
  {
    numb: 6,
    question: "Which of the following is not a front-end technology?",
    answer: "SQL",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "SQL"
    ]
  },
  {
    numb: 7,
    question: "Database in Full stack development is used to ____.",
    answer: "Storing and retrieving data",
    options: [
      "Styling HTML pages",
      "Storing and retrieving data",
      "Handling errors on server-side",
      "Rendering web pages"
    ]
  },
  {
    numb: 8,
    question: "What is Git?",
    answer: "Version control system",
    options: [
      "Framework",
      "Version control system",
      "Database",
      "Package manager"
    ]
  },
  {
    numb: 9,
    question: "CRUD stands for ____.",
    answer: "Create, Read, Update, Delete",
    options: [
      "Create, Read, Upload, Delete",
      "Create, Read, Upgrade, Deploy",
      "Create, Remove, Upgrade, Delete",
      "Create, Read, Update, Delete"
    ]
  },
  {
    numb: 10,
    question: "Is JavaScript synchronous or asynchronous?",
    answer: "Synchronous but can be used as asynchronous",
    options: [
      "Synchronous",
      "AsynchronousS",
      "Both",
      "Synchronous but can be used as asynchronous"
    ]
  }
];





FSstart_btn.onclick = () => {
  alert("FS quiz");
  info_box.classList.add("activeInfo");
  container__home.style.display = "none";
}




// if Next Que button clicked
next_btn.onclick = ()=>{
  if(que_count < FSquestions.length - 1){ //if question count is less than total question length
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
  let que_tag = '<span>'+ FSquestions[index].numb + ". " + FSquestions[index].question +'</span>';
  let option_tag = '<div class="option"><span>'+ FSquestions[index].options[0] +'</span></div>'
  + '<div class="option"><span>'+ FSquestions[index].options[1] +'</span></div>'
  + '<div class="option"><span>'+ FSquestions[index].options[2] +'</span></div>'
  + '<div class="option"><span>'+ FSquestions[index].options[3] +'</span></div>';
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
  let correcAns = FSquestions[que_count].answer; //getting correct answer from array
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
      let scoreTag = '<span>and congrats! 🎉, You got <p>'+ userScore +'</p> out of <p>'+ FSquestions.length +'</p></span>';
      scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
  }
  else if(userScore > 1){ // if user scored more than 1
      let scoreTag = '<span>and nice 😎, You got <p>'+ userScore +'</p> out of <p>'+ FSquestions.length +'</p></span>';
      scoreText.innerHTML = scoreTag;
  }
  else{ // if user scored less than 1
      let scoreTag = '<span>and sorry 😐, You got only <p>'+ userScore +'</p> out of <p>'+ FSquestions.length +'</p></span>';
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
          let correcAns = FSquestions[que_count].answer; //getting correct answer from array
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
  let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ FSquestions.length +'</p> Questions</span>';
  bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}