

let signUp = document.getElementById("signup");
let logIn = document.getElementById("login");
let signupWindow = document.getElementById("signupForm");
let loginWindow = document.getElementById("loginForm");
let signinCloseIcon = document.getElementById("signupCloseIcon");
let loginCloseIcon = document.getElementById("loginCloseIcon");

// Reading input values when signing up

let signupForm = document.getElementById("signupform");
let userName = document.getElementById("userSignInName");
let userEmail = document.getElementById("userSignInEmail");
let userPass = document.getElementById("userSignInPass");

let userOriginalEmail;
let userOriginalPass;
let userOriginalName;

function userSignup() {
    signupWindow.classList.remove("hide-signup-page");
}
signinCloseIcon.addEventListener("click", function () {
    signupWindow.classList.add("hide-signup-page");
    userName.value = "";
    userEmail.value = "";
    userPass.value = "";
});

signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    userOriginalEmail = userEmail.value;
    userOriginalName = userName.value;
    userOriginalPass = userPass.value;

    if (userOriginalEmail && userOriginalPass && userOriginalName) {
        localStorage.setItem('userName',userOriginalName);
        localStorage.setItem('userEmail',userOriginalEmail);
        localStorage.setItem('userPass',userOriginalPass);
        Swal.fire({
            title: "Account Created Successfully",
            icon: "success",
        });

        signupWindow.classList.add("hide-signup-page");
        console.log(userOriginalPass);
        console.log(userOriginalEmail);
        console.log(userOriginalName);
        userName.value = "";
        userEmail.value = "";
        userPass.value = "";
    }else if (!(userOriginalEmail && userOriginalPass && userName.value)) {
        Swal.fire({
            title: "Please Fill Form Correctly",
            icon: "error",
        });
    }
});

//! Reading inputs when user login

let loginForm = document.getElementById("loginForm");
let loginEmail = document.getElementById("userLoginemial");
let loginPass = document.getElementById("userLoginPass");
// let loginBtn = document.getElementById('loginbtn');
let loginBtnLink = document.getElementById('changelink');

let userloginName = localStorage.getItem('userName');
let userloginEmail = localStorage.getItem('userEmail');
let userloginPass = localStorage.getItem('userPass');

function userLogin() {
    loginWindow.classList.remove("hide-login-page");
}
loginCloseIcon.addEventListener("click", function () {
    loginWindow.classList.add("hide-login-page");
    loginEmail.value = "";
    loginPass.value = "";
});

loginForm.addEventListener('submit', function (e) {    
    e.preventDefault();
    if (
        loginEmail.value == userOriginalEmail &&
        loginPass.value == userOriginalPass
    ) {
        loginWindow.classList.add("hide-login-page");
        loginEmail.value = "";
        loginPass.value = "";
        Swal.fire({
            title: "Log In Suucessfully",
            icon: "success",
        });
        setTimeout(() => {
            location.assign("selectQuiz.html");
        }, 1200);
    } else if((loginEmail.value != userOriginalEmail)) {
        Swal.fire({
            title: "Please Sign Up First",
            icon: "warning",
        });
        loginEmail.value = "";
        loginPass.value = "";
    }
    else{
        Swal.fire({
            title: "Incorrect Password",
            icon: "warning",
        });
        loginPass.value = "";

    }
});


//! Doing Change Theme Functionallity

let body = document.getElementById('body');
let pText = document.getElementById('introText')


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
        pText.classList.remove("lightp");
    }else{
        body.className = "dark-bg";
        pText.classList.add("lightp");
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