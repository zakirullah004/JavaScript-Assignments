
let userName = localStorage.getItem('userName');
let welcomeUser = document.getElementById('userWelcome');
let navUser = document.getElementById('user').textContent = userName;
welcomeUser.textContent = "Welcome, "+userName;

let quizSelect = document.querySelectorAll('.quiz-card-btn');

for(let i=0; i<quizSelect.length; i++){
    quizSelect[i].addEventListener('click',function(e){
        if(e.target.parentElement.id == "htmlQuiz"){
            localStorage.setItem('Quiz',quizSelect[i].parentElement.firstElementChild.textContent)
            location.assign("Quizes Pages/Html.html");
        }else if(e.target.parentElement.id == "cssQuiz"){
            localStorage.setItem('Quiz',quizSelect[i].parentElement.firstElementChild.textContent)
            location.assign("Quizes Pages/Css.html");
        }else{
            localStorage.setItem('Quiz',quizSelect[i].parentElement.firstElementChild.textContent)
            location.assign("Quizes Pages/JavaScript.html");
        }
    })
}

let logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click',function(){
    location.assign("index.html")
})