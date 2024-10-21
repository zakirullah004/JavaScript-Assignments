
const questions = document.querySelector(".questions");
const result = document.querySelector(".result");
const showResult = document.querySelector("#showResult");
const ul = document.querySelector(".result ul");

let answers = ["option-3", "question2-option-3", "question3-option-2", "question4-option-1", "question5-option-3"];
let correctAnswer = [];
let correctAnswerContent = [];


questions.addEventListener('click',function(e){
    if(answers.includes(e.target.id)){
        if(!correctAnswer.includes(e.target)){
            correctAnswer.push(e.target);
        }    
        // if(!correctAnswerContent.includes(e.target.nextElementSibling.innerText)){
        //     correctAnswerContent.push(e.target.nextElementSibling.innerText);
        // } 
    }
    // else if(!answers.includes(e.target.id)){
    //     correctAnswer.pop();
    // }
    // else if(!answers.includes(e.target)) {
    //     if(!wrongAnswers.includes(e.target)){
    //         wrongAnswers.push(e.target);
    //     }
    // }
    
});

showResult.addEventListener('click',function(){

    // ul.innerHTML = "";
    // result.firstElementChild.textContent = "";
    // result.firstElementChild.nextElementSibling.textContent = "";
    // result.lastElementChild.previousElementSibling.textContent = "";

    result.firstElementChild.textContent = "Your Score";
    result.firstElementChild.nextElementSibling.textContent = `${correctAnswer.length}/${answers.length}`;
    let per = ( correctAnswer.length / answers.length ) * 100;
    result.lastElementChild.previousElementSibling.textContent = `${per.toFixed()}%  `;
    if(per >= 80){
        result.lastElementChild.previousElementSibling.classList.add("percentage","eighty");
    }else if (per > 70){
        result.lastElementChild.previousElementSibling.classList.add("percentage","seventy");
    }else if(per >= 50){
        result.lastElementChild.previousElementSibling.classList.add("percentage","fifty");
    }
    else{
        result.lastElementChild.previousElementSibling.classList.add("percentage","red");
    }
    result.classList.add("result-style");
    // for(let i=0; i<correctAnswerContent.length; i++){
    //     correctAnswerContent.sort()
    //     let lis = document.createElement("li");
    //     lis.innerText = correctAnswerContent[i];
    //     ul.appendChild(lis);
    // }

});




