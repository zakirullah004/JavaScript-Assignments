var n1,n2,n3;

// variables

// Legal  variables
var carName;
var user_Name;
var std1;
var std_1;
var user$;

// illegal  variables

// var 1User ;
// var user name;
// var std-1;
// var std*3;
// var let.name;


document.write("<h1>Rules for naming JS vvariables</h1>");
document.write("<br><br>variables names can only contain , numbers,$ and_.For example : $my_1stVariable");
document.write("<br>Variables must begin with a letter,$ or _ .For example : $name, _name or name");
document.write("<br>Variables names are case sensitive");
document.write("<br>Variables names should not be JS Keywords");

var num_1 = prompt("for Addition \nEnter 1st number : ");
var num_2 = prompt("Enter 2nd number : ");
var sum = Number(num_1) + Number(num_2);
document.write("addition of " + num_1 +  " and " + num_2 + " is " + sum);


var num_1 = prompt("for subtraction \nEnter 1st number : ");
var num_2 = prompt("Enter 2nd number : ");

var sum = Number(num_1) - Number(num_2);
document.write("<br>Subrtaction of " + num_1 +  " and " + num_2 + " is " + sum);

var num_1 = prompt("for multiplication \nEnter 1st number : ");
var num_2 = prompt("Enter 2nd number : ");

var sum = Number(num_1) * Number(num_2);
document.write("<br>multiplication of " + num_1 +  " and " + num_2 + " is " + sum);

var num_1 = prompt("for division \nEnter 1st number : ");
var num_2 = prompt("Enter 2nd number : ");

var sum = Number(num_1) / Number(num_2);
document.write("<br>division of " + num_1 +  " and " + num_2 + " is " + sum);


var n;
document.write("Value after variable declaration is : " + n);
n = 5;
document.write("<br>Initial Value :" + n);
++n;
document.write("<br>Value after increment is : " + n);
n+=7;
document.write("<br>Value after addition is : " + n);
--n;
document.write("<br>Value after decrement is : " + n);
n %= 3;
document.write("<br>Value after remainder is : " + n);


const ticket = 600;
tCost = ticket * 5;
document.write("Total cost to buy 5 ticket is " +tCost)

document.write("<h2> table of 4 </h2>");

for (let i = 1; i <= 10; i++) {
    document.write("<br> 4 X " + i + " = " + 4*i) ;   
}


var CT = 25;
var FT = CT * (9/5) + 32;

document.write(CT + "<sup>o</sup>C is " + FT +" <sup>o</sup>F");

var ft = 70;
var ct = ft - 32 * (5/9);
document.write("<br>" + ft+ "<sup>o</sup>F is " + ct +" <sup>o</sup>C");


var item_1Price = 650;
var item_1qnt = 3;

var item_2Price = 100;
var item_2qnt = 7;
const ship_charges = 100;

var total_amount = (item_1Price * item_1qnt) + (item_2Price * item_2qnt) + ship_charges ;

document.write("<h1>Shopping Cart</h1>");

document.write("Price of item 1 is : " + item_1Price);
document.write("<br>Quantity of item 1 is : " + item_1qnt);
document.write("<br>Price of item 2 is : " + item_2Price);
document.write("<br>Quantity of item 2 is : " + item_2qnt);
document.write("<br>Shipping charges is : " + ship_charges);

document.write("<br><br>Total cost of your order is : " + total_amount)



var tMarks = 550;
var oMarks = 400;
var per = (oMarks/tMarks) * 100;

document.write("<h1>Marks Sheet</h1>");
document.write("<br> Total marks : " + tMarks);
document.write("<br> Obtained marks : " + oMarks);
document.write("<br> Percentage : " + per + "%");


var pkr = (10*104.80) + (25*28);
document.write("<h1>Currency in PKR</h1>");
document.write("<br> Total Currency in PKR is : " + pkr);


var num = 2;
num += 5;
num *= 10;
num /= 2;
alert(num);


var cYear = 2024;
var bYear = 2005;
var age = cYear - bYear;
document.write("<h1>Age Caclculator</h1>");
document.write("current year : " + cYear);
document.write("<br> birth year : " + bYear);
document.write("<br> your age is : " + age);


var radius = 20;
var circum = (2*3.142) * radius;
var areaCircle = (3.142) *  radius*radius;

document.write("<h1>The Geometrizer</h1>");
document.write("radius of a circle is : " + radius);
document.write("<br>The circumference  is : " + circum);
document.write("<br>The area  is : " + areaCircle);

var snack = "Kurkure";
var myAge  = 15;
var maxAge = 65;
var perDay = 3;

var tEat = (maxAge - myAge) * perDay;

document.write("<h1>The Lifetime Supply Caclculator</h1>");

document.write("Favourite Sncak : " +snack);
document.write("<br>Current age  : " +myAge);
document.write("<br>Estimated age  : " +maxAge);
document.write("<br>Snaks per day  : " +perDay);

document.write("<br>you will need " + tEat + " " + snack + " to last until the old age of "+ maxAge);

var number1 = 10;
var number2 = 20;

if(number1 === number2){
    console.log("both numbers are equal ");
}else if(number1 >= number2){
}else{
    console.log(number2 + " is greater ");
}


var check = prompt("Enter any number : ");
if(check == 0){
    document.write("<br>" + check + " is Zero");
}else if(check > 0){
    document.write("<br>" + check + " is positive");
}
else{
    document.write("<br>" + check + " is negative");
}

var ch = prompt('Enter a single Character : ');

if(ch == "A" || ch == 'a'){
    document.write(ch + " is vowel");
}else if(ch == "E" || ch == 'e'){
    document.write(ch + " is vowel");
}
else if(ch == "I" || ch == 'i'){
    document.write(ch + " is vowel");
}
else if(ch == "O" || ch == 'o'){
    document.write(ch + " is vowel");
}else if(ch == "U" || ch == 'u'){
    document.write(ch + " is vowel");
}
else{
    document.write(ch + " is not a vowel");
}


var oPass = 123 ;
var pass = prompt("Enter your Password");

var new_2 = Number(pass);

if(pass == 123){
    console.log("your password matches the correct password : " + oPass);
}else if(pass == ""){
    console.log("please enter password");
}
else{
    console.log("soory");
}


var greeting;
var hour = 13;

if(hour < 18 ){
    greeting = "Good Day";
    console.log(greeting);

}
else{
    greeting = "Good evening";
    console.log(greeting);
}


var time = prompt("Enter time in 24 hrs format like(1200) : ");

if(time >= 0 && time <= 1200){
    console.log("good morning");
}
else if(time >= 1200 && time <= 1700){
    console.log("good afternoon");
}
else if(time >= 1700 && time <= 2100){
    console.log("good evening");
}
else if(time >= 2100 && time <= 2359){
    console.log("good night");
}
else{
    console.log("Enter correct time");
}


