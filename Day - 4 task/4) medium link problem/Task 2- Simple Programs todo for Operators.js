// 1) Square of a number

let number = 81;
console.log(Math.sqrt(number));


// 2) Swapping 2 numbers


let a = 30;
let b = 50;

let swa = 30;
a = b;
b = swa;

console.log(`The value of a is ${a} and The value of b is ${b}`);


// 3) Addition of 3 numbers

let g = 20;
let s = 30;
let z = 50;
console.log(g + s + z);  // output:100


//4) Celsius to Fahrenheit conversion

let Celsius = 25;

let Fahrenheit = (Celsius * 1.8) + 32;

console.log(Fahrenheit + " °F");

// 5)  Meter to miles

let Meter = 2000;
let miles = Meter / 1609;
console.log(miles);


// 6)  Pounds to kg

let Pounds = 20;
let kg = 1 / 2.205;
console.log(kg);

// 7) Calculate Batting Average


let Runs_Scored = 450;
let TimesOut = 20;

let Batting_Average = Runs_Scored / TimesOut;

console.log(Batting_Average);


// 8) Calculate five test scores and print their average

let test_scores1 = 50;
let test_scores2 = 60;
let test_scores3 = 40;
let test_scores4 = 80;
let test_scores5 = 75;

let average = (test_scores1 + test_scores2 + test_scores3 + test_scores4 + test_scores5) / 5;

console.log(average);


// 9) Power of any number x ^ y.

let x = 2;
let y = 4;

console.log(x ** y);
//console.log(Math.pow(x, y));

// 10) Calculate Simple Interest

let Principal = 100000;
let Rate_of_Interest = 2;
let Time = 12;

let Simple_Interest = (Principal * Rate_of_Interest * Time) / 100;

console.log(Simple_Interest);

// 11) Calculate area of an equilateral triangle



let A = 20;
let area =(1.73 * A * A) / 4;

console.log(area);

// 12)  Area Of Isosceles Triangle 

let base = 20;
let height = 50;
let Area = (base*height)/2;
console.log(Area);


// 13)  Volume Of Sphere 

let radius = 5;
let Volume = (4*Math.PI*(radius**3))/3;
console.log(volume);


