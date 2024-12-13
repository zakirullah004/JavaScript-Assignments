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


//!-----------DArk Theme

let body = document.getElementById('body')
function lightBg(){
    localStorage.setItem('bg',"light-bg")
    applyTheme()
}
function darkBg(){
    localStorage.setItem('bg',"dark-bg")
    applyTheme()
}

function applyTheme(){
    let themeColour = localStorage.getItem('bg')
    if(themeColour == "light-bg"){
        body.className = "light-bg"
    }else{
        body.className = "dark-bg";
        quizName.style.color = "#f2f2f2"
    }
}


function setByDefault() {
    var checkModeState = localStorage.getItem("bg");
    if (checkModeState === null) {
      localStorage.setItem("bg","light");
      applyTheme();
    } else {
        applyTheme();
    }
}


let logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click',function(){
    location.assign("../index.html")
})


function goBack(){
    location.assign("../selectQuiz.html");
}


window.onload = setByDefault();