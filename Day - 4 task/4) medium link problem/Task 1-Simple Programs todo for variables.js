// 1) Declare four variables without assigning values and print them in console

let name;
let age;
let email;
let mobile_number;

console.log(name);      //undefine
console.log(age);       //undefine
console.log(email);     //undefine
console.log(mobile_number);     //undefine


// 2)  How to get value of the variable myvar as output

var myvar = 1;
console.log(myvar);

//  3)   Declare variables to store your first name, last name, marital status, country and age in multiple lines

let detail = `Sivanathan
  V
  Unmaried
  India
  22`;

console.log(detail);


//  4)  Declare variables to store your first name, last name, marital status, country and age in a single line

let details = `Sivanathan V Unmaried India 22`;

console.log(details);

// 5) Declare variables and assign string, boolean, undefined and null data types

let str = "lenovo";
let bool = true;
let undefine;
let nul = null;
console.log(str);
console.log(bool);
console.log(undefine);
console.log(nul);


//  6)  Convert the string to integer

let num = "50";

// parseInt
console.log(parseInt(num) + 50);   //output:100

// number
console.log(Number(num) + 50);      //output:100

// Plus sign(+)

console.log(+num + 50);         //output:100
