

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

let cusName = "Abc customer";
let numofUnits = 410;
let chgperUnit = 16;
let latePayment = 350;

let amoPayable = (numofUnits * chgperUnit).toFixed(2)
console.log(amoPayable);

let afterLatePayment = (parseFloat(amoPayable) + latePayment).toFixed(2);
console.log(afterLatePayment);

let curMonth = new Date().toLocaleString('default',{month:"long"});
console.log(curMonth);
document.write("<h1>K-Electric Bill</h1>");
document.write("<b>Customer Name: </b>" + cusName + "<br>");
document.write("<b>Month: </b>" + curMonth + "<br>");
document.write("<b>Number of units: </b>" + numofUnits + "<br>");
document.write("<b>Charges per unit: </b>" + chgperUnit + "<br><br>");

document.write("<b>Net Amount Payable (within Due Date): </b>" + amoPayable + "<br>");
document.write("<b>Late Payment Surcharge: </b>" + latePayment + "<br>");
document.write("<b>Gross Amount Payable (after Due Date): </b>" + afterLatePayment + "<br>");

