// var myName = "Alex";

// var yourName = prompt("What is your name?");

// alert("My name is " +  myName + ", welcome to my course " + yourName + "!");
//****************************************************************************************** */
// function test(){
//     var a = "3";
//     var b = "8";

//     var a_changed = prompt("Enter value of var a");
//     var b_changed = prompt("Enter value of var b");
//     alert("var a = " + a_changed + "var b =" + b_changed + "!");



//     console.log("a is " + a);
//     console.log("b is " + b);
// }
//--------------------------------------108
// var message = "Hello";
// var name = "Alex";
// //-----------------

// alert(message + " there " + name);

//--------------------------------------109
//You have written 182 characters, you have -42 characters left. count function

//---------------------------------------110. 
//Slice and dice function.
// var name = "Alex";
// name.slice(0,1);
//-------------------------This trick will allow to cut amount of available symbols to 140------------//
// var tweet = prompt("Compose your tweet");
// var tweetUnder140 = tweet.slice(0,140);
// alert(tweetUnder140);
// ------------------------There is one more way to put this 3 lines to just 1
// alert(prompt("Compose your tweet: ").slice(0,140));
//------------------------ Method toUpperCase()
// var name = "Angela";
// name = name.toUpperCase(); // ---Method takes variable "Angela" and transforms it to the Upper case "ANGELA"
// name = name.toLowerCase(); // ---Method takes variable "Angela" and transforms it to the Lower case "angela"

//*
// ----Challenge - If user puts his name in lower case like "angela" how to transform it to be "Angela" in alert("Hello, " + name)//
//1. Create a var that stores the name that user enters via prompt.                                                               //
// var name = prompt("What is your name?");                                                                                          //
//2. Capitalise the first letter of their name.                                                                                   //
    //a isolate the first char                                                                                                    //
// var firstChar = name.slice(0,1);                                                                                                  //
    //b Turn the first char to upper case                                                                                         //
// var upperCaseFirstChar = firstChar.toUpperCase();                                                                                 //
    //c Isolate the rest of the name                                                                                              //
// var restOfName = name.slice(1,name.length);                                                                                       //
//-----If there will be situation that user puts his name like anGELA etc, we can fix it this way---------------------------------//
    //d Change the rest of the name to lower case                                                                                 //
// restOfName = restOfName.toLowerCase();                                                                                            //
    //e Concactenate the first char with the rest of the characters                                                               //
// var capitalisedName = upperCaseFirstChar + restOfName;                                                                            //
//3. We use the capitalised version of their name to greet them using an alert.                                                   //
// alert("Hello, " + capitalisedName);                                                                                               //
//On StackOwerflow will be some siplier ways to do it-----------------------------------------------------------------------------//

//*

//Basic Arithmetic and the Modulo "%" - "Percentage sign" Operator in JS
//For example 6/4 = 1.5 but 6%4 = 2, 12%8 = 4 etc.

//Challenge - Create a dog age to human age converter using humanAge = ((dogAge - 2) * 4) + 21

// var dogAge = prompt("How old is your dog?");
// var humanAge = ((dogAge - 2) * 4) + 21;
// console.log("Your dog is " + humanAge + " years old in human years.");


//----------------------Increment and Decrement Expressions ---------------------//

//var x = 5;
//x = x + 1; //6
// Much simpler way is to write this  like ==> var x = 5; ==> x++; //6 This called Increment
//var x = 5;
//x = x - 1; //4
// Much simpler way is to write this  like ==> var x = 5; ==> x--; //4 This called Decrement


//-----------------------Functions Part 1: Creating and Calling Functions -------------//

//function - functions allows you to create a series of instructions packaged in block of code "in {} braces", also you need to specify a name for this
//function. f.e. function getMilk() {} . There is the difference between creating and calling a function: Create - function getMilk(){}, Calling - getMilk(); 
//JS function is not closing with semicolon ;
//
// function getMilk() {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//   }

//---------------------Functions Part 2 - Parameters and Arguments ----------------//
//In order to do this, we need to slightly modify the code. We have to allow it to accept input where previously we had nothing between an parenthesis. 
//In this case we adding a name of the input "bottles" an allowes to be used inside of the series of instructions. In the middle it is going to tell a specific number of bottles which
//should be bought based on the input which function gets when it is called  
//
// function getMilk(money) {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     var numberOfBottles = Math.floor(money / 1.5); // Math.floor is used to round up numbers. F.e. result of this function is 3.33333333333 but using Math.floor it rounds to 3 instead.
//     console.log("buy" + numberOfBottles + "bottles of milk");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//   }
//-----------------------------------
// function getMilk(bottles){
//     var cost = bottles * 1.5;
//     //Do something with cost
// }
// getMilk(5);
//-----------This function calculates how many days, weeks and months you have until 90 years. -------------------//
// function lifeInWeeks(age){

//     var yearsRemaining = 90 - age;
//     var days = yearsRemaining * 365;
//     var weeks = yearsRemaining * 52;
//     var months = yearsRemaining * 12;

//     console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
// }

//----------------------------------------------------------------------------------------------------------------//
//---------------------Functions Part 3 - Outputs & Return Values ----------------//
// function getMilk(money) {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     var numBottles = money / 1.5;
//     console.log("buy" + numBottles + "bottles of milk");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//     return money % 1.5; // This means that we would get the remainder of how much we have spent
//   }
//   var change = getMilk(4);

/*

IMPORTANT NOTE! Strong need to look one more time at sections 119/120/121

*/
// BMI Calculator
// function bmiCalculator(weight, height) {
//     var bmi = weight / (height * height);
//     return bmi;
// }s
// ****************************************************************************************************************************************************************************************
//Secton 10: Intermediate Javascript

//-----------------------------------125. Random Number Generation in JS------------------------//
// Sudo random number generator. Randomly picks number in range between 1 - 6
// var n = Math.random();
// n = n * 6;
// n = Math.floor(n) + 1;
// console.log(n);
//---------------------------------------------Love calculator-----------------------------------
// prompt("What is your name?");
// prompt("What is their name?");
// var loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;                                       
// alert("Your love score is: " + loveScore + " %");

//-----------------------------------126. Control statements: Using If-Else Conditionals & Logic------------------------//
// prompt("What is your name?");
// prompt("What is their name?");
// var loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1; //1-100
// // === stands for equality
// if (loveScore > 70) {
//     alert("Your love score is: " + loveScore + "%" + " Love between you is enormous");
// } else {
//    alert("Your love score is: " + loveScore + " %"); 
// }

//-----------------------------------127. Comparators and Equality------------------------//
// === Is equal to
// !== Is not equal to
// > Is greater than
// < Is lesser than
// >= Is greater or equal to
// <= Is lesser or equal to

//-----------------------------------128. Combining comparators------------------------//
// && means AND
// || means OR
// ! means NOT
// prompt("What is your name?");
// prompt("What is their name?");
// var loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1; //1-100
// // === stands for equality
// if (loveScore > 70) {
//     alert("Your love score is: " + loveScore + "%" + " Love between you is enormous");
// } 
// if(loveScore > 30 && loveScore <= 70){
//     alert("Your love score is: " + loveScore + "%" + " Average but not bad");

// }
// if(loveScore <= 30){
//     alert("Your love score is: " + loveScore + "%" + " Well, you are fucked");
// }

//-----------------------------------129. Leap year code challenge------------------------//
// function isLeap(year) {
    
//     /**************Don't change the code above****************/    
        
//         //Write your code here.    
    
//         if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {

//             console.log("Leap year.");
    
//         }
    
//         else {
    
//             console.log("Not leap year.");
    
//         }
        
    
//     /**************Don't change the code below****************/    
    
//     }

//-----------------------------------131. Collections: Working with JS Arrays------------------------//
// var eggs = ['white', 'brown', 'red', 'green'];
// var myEgg = eggs[1]; // It means that we pick 'brown' from array because counting always starts from 0

// var guestList = ['Angela', 'Jack', 'Paul', 'James', 'Laura', 'Jason'];

// // How to retrieve items from array ==>
// console.log(guestList[0]);

// console.log(guestList.includes(Jack));

// Challenge: 
// To write a code which uses prompt asking name of the guest. 
// Checking if it is existing in array. If yes alert with greeting. Else alert that guest is not in guest list.

// var guestList = ['Angela', 'Jack', 'Paul', 'James', 'Laura', 'Jason'];

// var guestName = prompt("What is your name?");

// //Returns boolean is guestName is in array or not
// if(guestList.includes(guestName)){
//     alert("Greetings " + guestName + " !");
// } else {
//     alert("Sorry, you are not in the guest list. Try another time")
// }

//-----------------------------------132. Adding Elements and Intermediate Array Techniques------------------------//
// FizzBuzz: Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
// For example we have array of numbers from 1 - 100 and it should look like 1 2 Fizz 4 Buzz
// var output = [];
// var count = 1;
function fizzBuzz(){
    if(count % 3 === 0 && count % 5 === 0){
        output.push("FizzBuzz")
    }
    else if(count % 3 === 0){
        output.push("Fizz");
    
    } else if(count % 5 === 0){
        output.push("Buzz");
    }
    
    else {
        output.push(count);
    }
    
    
    count++;
    

        console.log(output);


}

var numberOfPeople = names.length;
var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
var randomPerson = names[randomPersonPosition];

return randomPerson + " is going to buy lunch today!";


