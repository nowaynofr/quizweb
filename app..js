
console.log(quiz)
const answersIndicatorContainer =document.querySelector(".answers-indicator")
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container")
const HomeBox = document.querySelector(".home-box")
const quizBox = document.querySelector(".quiz-box")
const resultBox = document.querySelector(".result-box")


let questionCounter =0;
let currentQuestion;
let availableQuestion =[];
let availableOption =[];
let correctAnswers =0;
let attempt =0;



function setAvailableQuestion(){
    const totalQuestion = quiz.length;
    for (let i=0; i<totalQuestion; i++){
        availableQuestion.push(quiz[i])
    }

}
function getNewQuestion(){
    
    questionNumber.innerHTML = "câu số "+(questionCounter+1) +"/"+quiz.length;

    const questionIndex = availableQuestion[(Math.floor(Math.random() *availableQuestion.length))]
    currentQuestion =questionIndex;
    questionText.innerHTML =currentQuestion.q;
    const index1 =availableQuestion.indexOf(questionIndex);
    availableQuestion.splice(index1,1);

    const optionLen = currentQuestion.option.length;
    // console.log(currentQuestion.option)
    for (let i=0;i <optionLen;i++){
        availableOption.push(i)
    }

    optionContainer.innerHTML =''
    let animationDelay =0.15;

    for (let i=0; i<optionLen;i++){
       
        const option =document.createElement("div");
        option.innerHTML =currentQuestion.option[i];
        option.id =i;
        option.style.animationDelay =animationDelay+'s';
        animationDelay=animationDelay+ 0.1;
        option.className ="option"
        optionContainer.appendChild(option);
        option.setAttribute("onclick","getResult(this)");
    }
    questionCounter++
}
function getResult (element){
    const id = parseInt(element.id);
    
    if( id === currentQuestion.answer){
        element.classList.add("correct");
        upadateAnswerIndicator("correct");
        correctAnswers++;
    }else {
        element.classList.add("wrong");
        upadateAnswerIndicator("wrong");
        const optionLen = optionContainer.children.length;
        for ( let i=0; i< optionLen;i++){
            if (parseInt(optionContainer.children[i].id) === currentQuestion.answer){
                optionContainer.children[i].classList.add("correct")
            }
        }
    }
    attempt++;
    huyclick();
}

function next(){
    if (questionCounter === quiz.length){
        console.log("quiz over");
        quizOver();
    }
    else{
        getNewQuestion();
    }

}
function quizOver(){
    quizBox.classList.add("hide");

    resultBox.classList.remove("hide");
    quizResult();
}
function quizResult(){
    resultBox.querySelector(".total-question").innerHTML=quiz.length;
    resultBox.querySelector(".total-attempt").innerHTML=attempt;
    resultBox.querySelector(".total-correct").innerHTML= correctAnswers;
    resultBox.querySelector(".total-wrong").innerHTML=attempt-correctAnswers;
    const percentage= (correctAnswers/quiz.length)*100;
    resultBox.querySelector(".percentage").innerHTML= percentage.toFixed() +"%";
    resultBox.querySelector(".total-score").innerHTML= correctAnswers +"/" +quiz.length;
}
function huyclick(){
    const optionLen = optionContainer.children.length;
    for (let i=0; i<optionLen ;i++)
        {
        optionContainer.children[i].classList.add("already-answered");
    }
}
function answersIndicator(){
    answersIndicatorContainer.innerHTML='';
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion;i++){
        const indicator = document.createElement("div");
        answersIndicatorContainer.appendChild(indicator)
    }
}
function upadateAnswerIndicator(markType){
    answersIndicatorContainer.children[questionCounter-1].classList.add(markType);
}
function resetQuiz(){
    questionCounter =0; 
    correctAnswers =0;
    attempt =0;
    
}
function thulai(){
    resultBox.classList.add("hide");
    quizBox.classList.remove("hide");
    resetQuiz();
    startQuiz();
}
function trangchu(){
    resultBox.classList.add("hide");
    HomeBox.classList.remove("hide")
}


function startQuiz(){
    resetQuiz();
    HomeBox.classList.add("hide");
    quizBox.classList.remove("hide");
    setAvailableQuestion();

    getNewQuestion();
    
    answersIndicator();
    
}
