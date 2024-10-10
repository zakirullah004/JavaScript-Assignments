
// buttons 
let changeNamebtn = document.querySelector('#changeNamebtn');
let changeDisbtn = document.querySelector('#changeDescbtn');
let changeBgbtn = document.querySelector('#changeBgbtn');
let changePicbtn = document.querySelector('#changePicbtn');
let resetbtn = document.querySelector('#resetbtn');

// display elements 
let userName = document.querySelector('.user-name');
let userDisc = document.querySelector('.user-disc');
let Input = document.querySelector('#inputFeild');
var cardBg = document.querySelector('.card-background');
let changeImg = document.querySelector('img');

let images = ['imgs/image1.avif', 'imgs/image2.png', 'imgs/images3.jpg', 'imgs/images4.png', 'imgs/images5.png'];

let imgLength = images.length;
let x = 0;

changePicbtn.addEventListener('click', function () {
    changeImg.src = images[x];
    x = x + 1;
    if(x == imgLength){
        changeImg.src = 'imgs/default pic.jpg';
        x = 0;
    }
});


//! change name button 
changeNamebtn.addEventListener('click', function () {
    if (Input.value.trim() === "") {
        return;
    }
    userName.innerHTML = Input.value;
    Input.value = '';
});

//! change description button 
changeDisbtn.addEventListener('click', function () {
    if (Input.value.trim() === "") {
        return;
    }
    userDisc.innerHTML = Input.value;
    Input.value = '';
});


//! Reset Form 
resetbtn.addEventListener('click', function () {
    userName.innerHTML = "john Doe";
    userDisc.innerHTML = "Profession";
    cardBg.style.backgroundColor = "rgba(27, 3, 3, 0.379)";
    changeImg.src = "imgs/default pic.jpg";
});


//! color change listener 
changeBgbtn.addEventListener('click', function () {
    let changecolor = changeBackgroundColor();
    cardBg.style.backgroundColor = changecolor;
});

//! color function 
function changeBackgroundColor() {

    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgba(${red}, ${green}, ${blue})`;
    if (red == 0 && green == 0 && blue == 0) {
        return color = `rgba(${24}, ${23}, ${125})`;
    }
    return color;
}