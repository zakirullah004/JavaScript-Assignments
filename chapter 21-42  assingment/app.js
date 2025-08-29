

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



