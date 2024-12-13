
var htmlQuiz = [
    {
        question: "HTML Stands for?",
        option1: "Hypertext",
        option2: "Markup",
        option3: "HyperSuperText",
        option4: "HyperText Markup Language",
        answer: "HyperText Markup Language",
    },
    {
        question: "What does &lt;h1&gt; represent in HTML?",
        option1: "A heading level 1",
        option2: "A paragraph",
        option3: "A hyperlink",
        option4: "An image tag",
        answer: "A heading level 1",
    },
    {
        question: "Which tag is used for creating a hyperlink?",
        option1: "&lt;a&gt;",
        option2: "&lt;link&gt;",
        option3: "&lt;url&gt;",
        option4: "&lt;href&gt;",
        answer: "&lt;a&gt;",
    },
    // {
    //     question: "What is the correct tag for inserting a line break?",
    //     option1: "&lt;br&gt;",
    //     option2: "&lt;lb&gt;",
    //     option3: "&lt;break&gt;",
    //     option4: "&lt;newline&gt;",
    //     answer: "&lt;br&gt;",
    // },
    // {
    //     question: "Which tag is used to insert an image in HTML?",
    //     option1: "&lt;image&gt;",
    //     option2: "&lt;img&gt;",
    //     option3: "&lt;pic&gt;",
    //     option4: "&lt;src&gt;",
    //     answer: "&lt;img&gt;",
    // },
    // {
    //     question: "What is the correct tag for a numbered list?",
    //     option1: "&lt;ul&gt;",
    //     option2: "&lt;list&gt;",
    //     option3: "&lt;ol&gt;",
    //     option4: "&lt;li&gt;",
    //     answer: "&lt;ol&gt;",
    // },
    // {
    //     question: "How do you create an unordered list?",
    //     option1: "&lt;ul&gt;",
    //     option2: "&lt;list&gt;",
    //     option3: "&lt;li&gt;",
    //     option4: "&lt;ol&gt;",
    //     answer: "&lt;ul&gt;",
    // },
    // {
    //     question: "What does the &lt;title&gt; tag define?",
    //     option1: "The page title shown in the browser tab",
    //     option2: "A heading",
    //     option3: "A hyperlink",
    //     option4: "An image caption",
    //     answer: "The page title shown in the browser tab",
    // },
    // {
    //     question: "Which tag is used to define a table in HTML?",
    //     option1: "&lt;table&gt;",
    //     option2: "&lt;tbl&gt;",
    //     option3: "&lt;td&gt;",
    //     option4: "&lt;tr&gt;",
    //     answer: "&lt;table&gt;",
    // },
    // {
    //     question: "What is the correct tag for a paragraph in HTML?",
    //     option1: "&lt;p&gt;",
    //     option2: "&lt;para&gt;",
    //     option3: "&lt;pg&gt;",
    //     option4: "&lt;text&gt;",
    //     answer: "&lt;p&gt;",
    // },
];


var CssQuiz = [
    {
        question: "What does CSS stand for?",
        option1: "Cascading Style Sheets",
        option2: "Creative Style System",
        option3: "Colorful Style Syntax",
        option4: "Coded Style Selector",
        answer: "Cascading Style Sheets",
    },
    {
        question: "Which CSS property is used to change the background color?",
        option1: "color",
        option2: "bgcolor",
        option3: "background-color",
        option4: "background",
        answer: "background-color",
    },
    {
        question: "How do you add a comment in CSS?",
        option1: "// This is a comment",
        option2: "/* This is a comment */",
        option3: "&lt;!-- This is a comment --&gt;",
        option4: "// This is not allowed",
        answer: "/* This is a comment */",
    },
    {
        question: "Which property is used to change the font size?",
        option1: "font-size",
        option2: "text-size",
        option3: "size",
        option4: "font-weight",
        answer: "font-size",
    },
    {
        question: "What is the default value of the `position` property?",
        option1: "static",
        option2: "relative",
        option3: "absolute",
        option4: "fixed",
        answer: "static",
    },
    {
        question: "Which CSS property is used to make the text bold?",
        option1: "text-style",
        option2: "font-weight",
        option3: "font-style",
        option4: "font-bold",
        answer: "font-weight",
    },
    {
        question: "What is the correct way to apply a class selector in CSS?",
        option1: ".classname { }",
        option2: "#classname { }",
        option3: "&lt;classname&gt; { }",
        option4: "classname { }",
        answer: ".classname { }",
    },
    {
        question: "Which property is used to align text to the center?",
        option1: "text-align",
        option2: "align-center",
        option3: "text-style",
        option4: "font-align",
        answer: "text-align",
    },
    {
        question: "What does the `z-index` property control?",
        option1: "The visibility of an element",
        option2: "The stacking order of elements",
        option3: "The width of an element",
        option4: "The position of an element",
        answer: "The stacking order of elements",
    },
    {
        question: "Which unit is NOT relative in CSS?",
        option1: "em",
        option2: "px",
        option3: "rem",
        option4: "%",
        answer: "px",
    },
];

var jsQuiz = [
    {
        question: "Which symbol is used to declare a variable in JavaScript?",
        option1: "let",
        option2: "var",
        option3: "const",
        option4: "All of the above",
        answer: "All of the above",
    },
    {
        question: "How do you write a single-line comment in JavaScript?",
        option1: "// This is a comment",
        option2: "/* This is a comment */",
        option3: "&lt;!-- This is a comment --&gt;",
        option4: "# This is a comment",
        answer: "// This is a comment",
    },
    {
        question: "What will `console.log(typeof 42)` output?",
        option1: "number",
        option2: "string",
        option3: "boolean",
        option4: "object",
        answer: "number",
    },
    {
        question: "Which method is used to add an element to the end of an array?",
        option1: "push()",
        option2: "pop()",
        option3: "shift()",
        option4: "unshift()",
        answer: "push()",
    },
    {
        question: "What will `Boolean(0)` return?",
        option1: "true",
        option2: "false",
        option3: "undefined",
        option4: "null",
        answer: "false",
    },
    {
        question: "Which method is used to convert a string to an integer?",
        option1: "Number()",
        option2: "parseInt()",
        option3: "toString()",
        option4: "parseFloat()",
        answer: "parseInt()",
    },
    {
        question: "What is the correct way to declare a function in JavaScript?",
        option1: "`function myFunction() { }`",
        option2: "`let myFunction() { }`",
        option3: "`def myFunction() { }`",
        option4: "`function = myFunction() { }`",
        answer: "`function myFunction() { }`",
    },
    {
        question: "How do you write `Hello World` in an alert box?",
        option1: "alert('Hello World');",
        option2: "msg('Hello World');",
        option3: "console.log('Hello World');",
        option4: "prompt('Hello World');",
        answer: "alert('Hello World');",
    },
    {
        question: "Which operator is used for strict equality comparison?",
        option1: "==",
        option2: "===",
        option3: "=",
        option4: "!===",
        answer: "===",
    },
    {
        question: "What does `null` represent in JavaScript?",
        option1: "An undefined value",
        option2: "An empty object",
        option3: "No value or object",
        option4: "A falsy number",
        answer: "No value or object",
    },
];

let getquizName = localStorage.getItem('Quiz');
let quizName;

if (getquizName == "Html") {
    quizName = htmlQuiz;
} else if (getquizName == "Css") {
    quizName = CssQuiz;
}
else if (getquizName == "JavaScript") {
    quizName = jsQuiz;
}

let userName = localStorage.getItem('userName');
let navUser = document.getElementById('user').textContent = userName;

let getQuizName = localStorage.getItem("Quiz");
let pageTitle = document.getElementById("Title").textContent = `${getQuizName} | Quiz`

let questionContainer = document.getElementById('questions_container');

let question = document.getElementById('question');
let label1 = document.getElementById('label1')
let label2 = document.getElementById('label2')
let label3 = document.getElementById('label3')
let label4 = document.getElementById('label4')

let option1 = document.getElementById('option1')
let option2 = document.getElementById('option2')
let option3 = document.getElementById('option3')
let option4 = document.getElementById('option4')

let quizOptions = document.getElementsByName('quizoption')

let nextQuestion = document.getElementById('nextQuestion');
let goHome = document.getElementById('GoHome');


//! Result Window 
let resultWindow = document.getElementById('show/hide_result');
let announcement = document.getElementById('announcement')
let percentageShow = document.getElementById('percentage')
let totalQues = document.getElementById('totalQue')
let correctQues = document.getElementById('passQue')
let wrongAns = document.getElementById('wrongAns')

let questionCounter = 0
let score = 0;

function QuizHere() {
    function renderQuestion() {
        // console.log(quizName[questionCounter].question);
        question.innerHTML = quizName[questionCounter].question

        label1.innerHTML = quizName[questionCounter].option1
        label2.innerHTML = quizName[questionCounter].option2
        label3.innerHTML = quizName[questionCounter].option3
        label4.innerHTML = quizName[questionCounter].option4

        option1.value = quizName[questionCounter].option1;
        option2.value = quizName[questionCounter].option2;
        option3.value = quizName[questionCounter].option3;
        option4.value = quizName[questionCounter].option4;

    }

    function disSeletOption() {
        for (let i = 0; i < quizOptions.length; i++) {
            quizOptions[i].checked = false;
            if (quizOptions[i].parentElement.classList.contains('list-group-item', 'active')) {
                quizOptions[i].parentElement.classList.remove('list-group-item', 'active')
            }

        }
    }

    for (let i = 0; i < quizOptions.length; i++) {
        quizOptions[i].addEventListener('change', function (e) {
            for (let j = 0; j < quizOptions.length; j++) {
                quizOptions[j].parentElement.classList.remove('list-group-item', 'active')
            }
            if (quizOptions[i].checked) {
                quizOptions[i].parentElement.style.backgroundColor = "none";
                e.target.parentElement.classList.add('list-group-item', 'active');
            }
        });
    }

    nextQuestion.addEventListener('click', function () {
        let isRadioChecked = false;
        for (let i = 0; i < quizOptions.length; i++) {
            if (quizOptions[i].checked) {
                isRadioChecked = true
                console.log(quizOptions[i].value);
                if (quizOptions[i].value == quizName[questionCounter].answer) {
                    score++
                }
            }
        }

        if (!isRadioChecked) {
            // console.log("Please Select option");
            Swal.fire({
                title: "No Option Selected!",
                text: "Please Select an Option",
                icon: "error"
            });
        } else {
            if (questionCounter < quizName.length - 1) {
                questionCounter++
                renderQuestion();
                disSeletOption();
            } else {
                showResult()
            }
        }
    })

    function showResult() {
        questionContainer.style.display = "none";
        resultWindow.classList.remove('show-result-screen')
        let per = Math.round(score / quizName.length * 100);

        if (per < 70) {
            announcement.textContent = "You Failed! Better Luck Next Time"
            announcement.classList.add('red-text')
            percentageShow.classList.add('red-per')
        } else {
            announcement.textContent = "Congatulations! You Passed the Exam"
            announcement.classList.add('green-text')
            percentageShow.classList.add('green-per')
        }
        totalQues.textContent = quizName.length;
        correctQues.textContent = score;
        wrongAns.textContent = quizName.length - score;
        percentageShow.textContent = `${per}%`;

        goHome.addEventListener('click', function () {
            location.assign("mianquizpage.html");
            console.log("go to home page");
            // location.assign(`${getquizName}.html`);
            resultWindow.classList.add('show-result-screen')
        })
    }
    renderQuestion();
}

//! Dark Theme Style -------------------------------------

let body = document.getElementById('body');
let labelText = document.querySelectorAll('label')

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
        body.className = "light-bg";
        question.style.backgroundColor = "rgb(226, 224, 229)"
    }else{
        body.className = "dark-bg";
        question.style.color = "#323232"
        question.style.backgroundColor = "#5cb9ff"
        labelText.forEach(function(e){
            e.style.color = "black"
        })
    }
}

function setByDefault() {
    QuizHere();
    var checkModeState = localStorage.getItem("bg");
    if (checkModeState === null) {
      localStorage.setItem("bg" , "light");
      applyTheme();
    } else {
        applyTheme();
    }
}


window.onload = setByDefault()
// window.onload = QuizHere();