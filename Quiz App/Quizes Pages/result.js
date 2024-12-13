
let getResultData = localStorage.getItem("setResult");
getResultData = JSON.parse(getResultData);

let guizName = document.getElementById("quizName");
let showNote = document.getElementById('note')


let resultWindow = document.getElementById('showhide_result');
let announcement = document.getElementById('announcement')
let percentageShow = document.getElementById('percentage')
let totalQues = document.getElementById('totalQue')
let correctQues = document.getElementById('passQue')
let wrongAns = document.getElementById('wrongAns')

if (getResultData == null) {
    showNote.textContent = "No Data Found"
} else {
    resultWindow.classList.remove("show-result-screen")
    quizName.textContent = `${getResultData.quizName} Quiz Result`
    totalQues.textContent = getResultData.quizlength;
    correctQues.textContent = getResultData.score;
    wrongAns.textContent = getResultData.quizlength - getResultData.score;
}

//! ---------------- Dark Theme

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

window.onload = setByDefault();


