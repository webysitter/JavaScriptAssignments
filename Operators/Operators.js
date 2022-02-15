'use strict';
//By Noga Vigdor
//assignemnt 1
/*
let numOfDaysUntilWeekend = 2;


numOfDaysUntilWeekend -= 1;


1. Use console.log() to log the value just after the variable has been declared
//undefined  (a "noraml" reaction of the consol when declaring variables)
2.  Use console.log() to log the value right after the value of the variable has been changed.
3. Tell what it does 
*/
let numOfDaysUntilWeekend = 2;
console.log(numOfDaysUntilWeekend);
//it pefroms a variable assignmnent of 2 into the variable numOfDaysUntilWeekend
 
numOfDaysUntilWeekend -= 1;
console.log(numOfDaysUntilWeekend);
//it decrement (substracts 1) from the value of numofDaysUntilWeekend (2) and outputs the result (1)



//assignemnt 2
//Addition to numbers
let x=3;
let y=2;
let z=x+y;
console.log(z);

//assignemnt 3
//Subtraction to numbers
z=x-y;
console.log(z);


//assignemnt 4
//write two sentences in two variables and connect them together 
let sentence1="hello world";
let sentence2=", the sun is shining";
let sentence3=sentence1+sentence2;
console.log(sentence3);

//assignemnt 5
//write two variables, one number and one string. add them together
let aNumber=1;
let aString="one";
let numString=aNumber+aString;  //1one

//assignemnt 6
//write the answears in the in a comment
let r = 15;
let s = 5;
let t = r + s; // t is 20
let u = r - s; // u is 10
let v = t / u; // 20/10=2 => v is 2
let x = r * v; //15*2=30 -> x is 30
let y = s % v; // 5%2=1 => y is 1

//assignemnt 7
//Why does it not write out? 
//answer: because false or false equals false
let r = 34;
let c = 1;
let x = r - 32 + c; // x=3
let y = r++ * 4; //y=136  explanation: r is incremenated  only after the expression is calculated
if(x == 30 || y == 2 ){
 console.log("yeah you got it");
}
//change a number in a variable, so it print out the text
x=30;
//now it should work


//assignemnt 8
//make two vaiables. One variable must contain a number and the other one must contain a prompt, 
//where the user can enter a number. Match the two number and print out the answear
//TIP: search prompt
let input1=7;
let input2=prompt("Please enter a number: ");
if (input1>input2) {
    console.log("Sorry, Your number is smaller, computer  won.");
}
else if (input1<input2) {
    console.log("Congratz! Your number is biggr, You won.")
}
else 
    console.log("Its a tie!");



//assignment 9
//write these numbers in the console and write the output. Explain you thing this happens
    0.1 + 0.2; //0.30000000000000004 It has to do with the representaion of decimal number on the computer in binaric
    //and after the convertion the binaric, its not exactly the same number as in decimal
    //and therefor the end result is slightly different than the human calculation
    0.1 + 0.2 === 0.3; //as written about 0.1+0.2=0.30000000000000004
    //and that is slightly bigger than 0.3
    3  - 1 //2  operation between two numbers outputs a number
    3  + 1 //4 operation between two numbers outputs a number
    '3' - 1 //2  the string is automatically converted to a number type and then the calculation is performed
    //substraction is made only in numbers operation and not in strings concatenation
    //therefor the has to be made between two numbers and the string is convrted to number
    //and the result will be a number
    '3' + 1 //'31' The additiong of a numbber to a string outputs a string
    //Since + is an operation that can be made between strings and there is
    //one string, the other one will be converter to string and the end result
    //will be a string
    '222' - -'111' //333
    //Maybe because the first operation is negation of the '111'
    //and since a negation can not be performed on a string, it will convert
    //it into a number and then since a number can't be substracte of a string
    //'222' will be converted into a number and the 222--111 is 33 since
    //double minus is a plus


//assignemnt 9
//Write a JavaScript program to determine whether a given year is a leap year 
    year=prompt('Please enter a year: ');

    if ((year%4==0)&&(year%100==0)&&(year%400==0)) {
        console.log('It looks like it is a leap year!');
    }
    else
        console.log('It is not a leap year, thanks for trying!');


