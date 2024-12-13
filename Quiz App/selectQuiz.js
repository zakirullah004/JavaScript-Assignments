
let userName = localStorage.getItem('userName');
let welcomeUser = document.getElementById('userWelcome');
let navUser = document.getElementById('user').textContent = userName;
welcomeUser.textContent = "Welcome, "+userName;

let quizSelect = document.querySelectorAll('.quiz-card-btn');

for(let i=0; i<quizSelect.length; i++){
    quizSelect[i].addEventListener('click',function(e){
        if(e.target.parentElement.id == "htmlQuiz"){
            localStorage.setItem('Quiz',quizSelect[i].parentElement.firstElementChild.textContent)
            // location.assign("Quizes Pages/Html.html");
            location.assign("Quizes Pages/mianquizpage.html")
        }else if(e.target.parentElement.id == "cssQuiz"){
            // console.log(quizSelect[i].parentElement.firstElementChild.textContent);
            localStorage.setItem('Quiz',quizSelect[i].parentElement.firstElementChild.textContent)
            // location.assign("Quizes Pages/Css.html");
            location.assign("Quizes Pages/mianquizpage.html")
        }else{
            localStorage.setItem('Quiz',quizSelect[i].parentElement.firstElementChild.textContent)
            // location.assign("Quizes Pages/JavaScript.html");
            location.assign("Quizes Pages/mianquizpage.html")
            // console.log(quizSelect[i].parentElement.firstElementChild.textContent);
        }
    })
}


//! Dark Theme Style -------------------------------------

let body = document.getElementById('body');
let cards = document.querySelectorAll('.quiz-card');


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
        welcomeUser.style.color = "#054270";
        cards.forEach(function (e){
            e.classList.remove("blue-card")
        });
    }else{
        body.className = "dark-bg";
        welcomeUser.style.color = "#f2f2f2f2";
        cards.forEach(function (e){
            e.style.color = "#323232"
            e.classList.add("blue-card")
        });
    }
}


function setByDefault() {
    var checkModeState = localStorage.getItem("bg");
    if (checkModeState === null) {
      localStorage.setItem("bg" , "light");
      applyTheme();
    } else {
        applyTheme();
    }
}


let logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click',function(){
    location.assign("index.html")
});

window.onload = setByDefault();