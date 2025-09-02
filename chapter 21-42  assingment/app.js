

//! ***********  Chapter 21 to 25   ******************

// question 1

// let firstName = prompt("Enter your first name:")
// let lastName = prompt("Enter your Last name:")
// let fullName = `hello! ${firstName} ${lastName}`
// console.log(fullName);

// question 2

// let phoneModel = prompt("Enter your favourite mobile Name:")
// let phoneLength = phoneModel.trim().length
// console.log(phoneModel,"length is->",phoneLength);


// question 3

// let citizen = "Pakistani";
// console.log(citizen);
// console.log("Index of n:",citizen.indexOf("n"));


// question 4
// let greet = "Hello World";
// console.log(greet);
// console.log(greet.lastIndexOf("l"));


// question5

// let iAm = "Pakistani";
// console.log(iAm);
// console.log("3rd index Character is",iAm.charAt(3));



// question 6
//question 1 again using concat method

// let firstName = prompt("Enter your first name:")
// let lastName = prompt("Enter your Last name:")
// let fullName = firstName.concat(lastName)
// console.log("Welcome",fullName);


// question 7
// let city = "Hyderabad";
// console.log("Heydarabad");
// console.log("After Replacing",city.replace("Hyder","Islam"));

// question 8

// let messege = "ali and sami are best friends.They play cricket and football together."
// console.log("Before:",messege);
// console.log("After:",messege.replaceAll("and","&"));


// question 9

// let num = "472";
// console.log(num);
// console.log(typeof num);

// let finalNum = parseInt(num)
// let finalNum = Number(num)
// let finalNum = +num
// console.log(finalNum);
// console.log(typeof finalNum);


// question 10

// let userData = prompt("Enter some text");
// console.log("User Input",userData);
// console.log("UpperCase",userData.toUpperCase());


// question 11

// let userInp = prompt("Enter some text:");
// console.log("user Input:",userInp);
// let titleCase = userInp.charAt(0).toUpperCase() + userInp.slice(1)
// console.log("Title Case:",titleCase);


// question 12

// let num = 35.36

// let newNum = num.toString();
// console.log(newNum.replaceAll(".",""));
// console.log(typeof newNum);



//! ***********  Chapter 26 to 30   ******************

// question 1
// let num = Math.abs(Number(prompt("Enter decimal Number:")));
// console.log("Number:",num);
// console.log("Round off:",Math.round(num));
// console.log("Floor Value:",Math.floor(num));
// console.log("Ceil Value:",Math.ceil(num));


// question 2
// let negNum = -Number(prompt("Enter decimal Number:"));
// console.log("Number:",negNum);
// console.log("Round off:",Math.round(negNum));
// console.log("Floor Value:",Math.floor(negNum));
// console.log("Ceil Value:",Math.ceil(negNum));


// question 3

// let val = -45;
// let absVal = Math.abs(val)
// console.log("Value",val);
// console.log("Absolute Value",absVal);



// question 4

// let dice = Math.floor(Math.random() * 6 ) + 1;
// console.log("Dice value is:",dice);



// question 5
// let coin = (Math.floor(Math.random() * 2) + 1)
// if(coin == 1){
//     console.log("Tails",coin);
// }
// else{
//     console.log("Heads",coin);
// }



// question 6

// let ranNum = Math.floor(Math.random() * 100) + 1;
// console.log("Random number between 1 and 100 is:",ranNum);



// question 7

// let userWeight = prompt("Enter your weight in Kilograms:");

// let finalWeight = parseInt(userWeight);
// console.log(finalWeight,"kilograms");


// questioin 8

// let gameNum = Math.floor(Math.random()*10)+1;
// let guessNum = (prompt("Guess the number between 1 to 10:"));
// let fla = true

// while(fla){
//     guessNum = prompt("Guess the number between 1 to 10:");
//     if(gameNum == guessNum){
//             fla = false
//         }
//     }

// while(guessNum != gameNum){
//         guessNum = prompt("Guess the number between 1 to 10:");
// }

// console.log("Congratuations: you guess it");
// console.log("the number was:",gameNum);



//! ***********  Chapter 31 to 34   ******************


// question 1

let date = new Date();
// console.log(date);


// question 2
// let monthName = date.toLocaleString('default',{month:"long"});
// console.log(monthName);


// question 3
// let currentDay = date.toLocaleString('default',{weekday:"long"});
// console.log(currentDay);


// question 4
// let currentDay = date.toLocaleString('default',{weekday:"long"});
// console.log(currentDay);
// if(currentDay == "Sunday" || currentDay == "Saturday"){
//     console.log("Its Fun Day!");
// }


// question 5
// let days = date.getDate()
// console.log(days);
// if(days < 16){
//     console.log("First fifften days of the month");
// }else{
//     console.log("Last days of the month:");
// }



// question 6

// let newDt = new Date()
// console.log("Current Date:",newDt)

// let miliSec = newDt.getTime();
// console.log("Mili Seconds since 1 jan 1970:",miliSec);

// let mts = Math.floor(miliSec/(1000 * 6));
// console.log("Minutes since 1 jan 1970:",mts);



// question 7
// let time = date.toLocaleTimeString()
// console.log(time);

// if(time.includes("AM")){
//     alert("Its AM now");
//     console.log("Its AM now");
// }else{ 
//     alert("Its PM now");
//     console.log("Its PM now");
// }



// question 8

// let laterDate = new Date("2020","11","31");
// console.log(laterDate);



// question 9

// let ramZan = new Date("2015-june-18")
// console.log(ramZan);
// let diffMs = date.getTime() - ramZan.getTime();
// console.log(diffMs);

// let getDays = Math.floor(diffMs / (1000*60*60*24))

// console.log(getDays +" days have passed since 1st Ramadan, 2015");



// question 10
// let refDate = new Date();
// let begDate = new Date("2015","0","1")

// console.log(refDate.getTime());
// console.log(begDate.getTime());

// let ellaSec = Math.floor(refDate.getTime() - begDate.getTime()/1000);
// console.log(ellaSec +" Seconds have passed since 1st jan 2015");





// question 11

// let curDate = new Date();
// console.log(curDate.toLocaleTimeString());

// curDate.setHours("1")
// console.log("before 1 hour the time was",curDate.toLocaleTimeString());




// question 12

// let currDate = new Date();
// console.log(currDate.getFullYear());
// console.log("Current Date",currDate);

// currDate.setFullYear(currDate.getFullYear() - 100);
// console.log("Before 100 years",currDate);




// question 13

// let userAge = Number(prompt("Enter your age:"))
// console.log("Your age is:",userAge);

// let dob = new Date();
// let nowYear = dob.getFullYear();

// dob.setFullYear(nowYear - userAge)
// console.log("Your Date of Birth is:",dob.getFullYear());






// question 14

// let cusName = "Abc customer";
// let numofUnits = 410;
// let chgperUnit = 16;
// let latePayment = 350;

// let amoPayable = (numofUnits * chgperUnit).toFixed(2)
// console.log(amoPayable);

// let afterLatePayment = (parseFloat(amoPayable) + latePayment).toFixed(2);
// console.log(afterLatePayment);

// let curMonth = new Date().toLocaleString('default',{month:"long"});
// console.log(curMonth);
// document.write("<h1>K-Electric Bill</h1>");
// document.write("<b>Customer Name: </b>" + cusName + "<br>");
// document.write("<b>Month: </b>" + curMonth + "<br>");
// document.write("<b>Number of units: </b>" + numofUnits + "<br>");
// document.write("<b>Charges per unit: </b>" + chgperUnit + "<br><br>");

// document.write("<b>Net Amount Payable (within Due Date): </b>" + amoPayable + "<br>");
// document.write("<b>Late Payment Surcharge: </b>" + latePayment + "<br>");
// document.write("<b>Gross Amount Payable (after Due Date): </b>" + afterLatePayment + "<br>");







//! ***********  Chapter 35 to 38   ******************


//      question 1

// function myFunction(){
//     let date = new Date()
//     return date
// }

// document.write(myFunction());






//       question 2

// let firstName = prompt("Enter your First name:")
// let lastName = prompt("Enter your Last name:")


// function greetUser(a,b){
//     return `Welcome ${a} ${b}`
// }
// document.write(greetUser(firstName,lastName))




// question 3

// let num1 = prompt("Enter first number:")
// let num2 = prompt("Enter second number:")

// function addNumbers(num1,num2){
//     return  `sum is ${num1 + num2}`
// }
// document.write(addNumbers(+num1,Number(num2)))




//         question 4

// let num1 = 10;
// let num2 = 5;
// let operator = "-"; // * + - / % 

// function myCalc(n1, n2, op) {
//     if (op == "*") {
//         console.log(`${n1} X ${n2} = ${n1 * n2}`);
//     } else if (op == "+") {
//         console.log(`${n1} + ${n2} = ${n1 + n2}`);
//     } else if (op == "-") {
//         console.log(`${n1} - ${n2} = ${n1 - n2}`);
//     } else if (op == "/") {
//         console.log(`${n1} / ${n2} = ${n1 / n2}`);
//     } else if (op == "%") {
//         console.log(`${n1} % ${n2} = ${n1 % n2}`);
//     } else {
//         alert("Wrong operator:")
//     }
// }
// myCalc(Number(num1), Number(num2), operator);





//      question 5

// let num = 3;
// function sqofNum(n){
// return `Square of ${n} is ${Math.pow(n,2)}`
// return `Square of ${n} is ${(n*n)}`
// return `Square of ${n} is ${(n**2)}`
// }

// console.log(sqofNum(num));




//          question 6

// let num = Number(prompt("Enter number to find its factorial:"));

// function factofNum(n){
//     let finalResult = 1;
//     for(let i=n;i>=1;i--){
// console.log(i);
//         finalResult *= i;
// finalResult = finalResult * i;
//     }
//     return finalResult;
// }

// console.log(factofNum(num));;






//          question 7

// let start = Number(prompt("Enter starting number:"))
// let end = Number(prompt("Enter Ending number:"))

// function countLimit(s,e){
//     for(let i=start; i<=end; i++){
//         console.log("Count",i);
//     }
// }

// countLimit(start,end);






//       question 8


// let base = Number(prompt("Enter base of traingle:"))
// let prep = Number(prompt("Enter prependicular of traingle:"))

// function hypotenuse(b,p){

//     function square(x){
//         return x*x
//     }

//     return Math.sqrt(square(b) + square(p));
// }

// console.log(hypotenuse(base,prep));






//      question 9


// let width = 23.56;
// let height = 103;

// function areaOfRectangle(w,h){
//     return `Area of Traingle is:${w*h}`
// }

// console.log(areaOfRecta/ngle(width,height)); //? argument as variable
// console.log(areaOfRectangle(44,80));    //? argument as value





//         question 10


// let userWord = prompt("Enter word to check if its palindrome or not:")

// function palindrome(wrd,len){

//     let reverseWord = "";

//     for(let i=len-1; i>=0; i--){
//         // console.log(wrd[i]);
//         reverseWord += wrd[i];
//     }
//     // console.log(reverseWord);

//     if(wrd == reverseWord){
//         console.log(`${wrd} is a palindrome word`);
//         console.log(`${wrd} = ${reverseWord}`);
//     }else{
//         console.log(`${wrd} is NOT a palindrome word`);
//         console.log(`${wrd} != ${reverseWord}`);
//     }

// }   
// palindrome(userWord,userWord.length);





//      question 11

// let str = prompt("Enter some text");

// function capitalize(w){
//     let newWord = w.split(" ");
//     let finalWord = "";
//     // console.log(newWord);
//     for(let i=0; i<=newWord.length-1; i++){
//         console.log(newWord[i]);
//         finalWord += `${newWord[i].charAt(0).toUpperCase() + newWord[i].slice(1)} `;
//     }
//     console.log(finalWord);
// }

// capitalize(str)





//             question 12

// let usrInp = prompt("Enter some sentence:")


// function findLongWord(wrds) {

//         let wrdsArray = wrds.split(" ");
//         let checkWord = wrdsArray[0].length;
//         let longWord = wrdsArray[0];

//         for (let i = 0; i <= wrdsArray.length - 1; i++) {
//                 console.log(wrdsArray[i], "==>", wrdsArray[i].length);
//                 if (wrdsArray[i].length > checkWord) {
//                         longWord = wrdsArray[i];
//                 }

//         }

//         console.log("the longest Word is->", longWord);

// }

// findLongWord(usrInp);




//      question 13

// let str = "web development course";
// let letter = "e";

// function checkSimilar(s,l){
//         let newStr = s.replaceAll(" ","")
//         // console.log(newStr);

//         let count = 0;

//         for(let i=0; i<=newStr.length-1; i++){
//                 // console.log(newStr[i]);
//                 if(newStr[i] == l){
//                         count++;
//                 }
//         }
//         console.log(`The total occurance of letter ${l} in ${s} is: ${count}`);

// }

// checkSimilar(str,letter);





// question 14


// function calcCircumferance(r){
//         const piVal = 3.142;

//         return `the circumfernece is: ${2*piVal*r}`
// }
// console.log(calcCircumferance(3));


// function calcArea(r){
//         const pi = 3.142
//               // or 
//         // const pi = Math.PI
//         return `The Area is ${pi*(r**2)}`
// }
// console.log(calcArea(4));