let quizName = document.getElementById('quizName');

let getQuizName = localStorage.getItem('Quiz');
quizName.textContent = `${getQuizName} Quiz`;

let startQuizBtn = document.getElementById('startQuiz');

let userName = localStorage.getItem('userName');
let navUser = document.getElementById('user').textContent = userName;

let quizTitle = document.getElementById('quizTitle').textContent = `${getQuizName} | Quiz`;
console.log(quizTitle);

let showquizName = document.getElementById("showquizname").textContent = getQuizName

startQuizBtn.addEventListener('click',function(e){
    location.assign("quizWindow.html")
});

let logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click',function(){
    location.assign("../index.html")
})


function goBack(){
    location.assign("../selectQuiz.html");
}