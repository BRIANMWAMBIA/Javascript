//closures are built on top of lexical scoping(nesting)
//closures
//modular pattern in javascript
//Function scoping:IIFE--Immediately Invoked functions expression---usd in jquery -- dollar variable name
//function expressions--->The word function is not the first word
//function statement

//scoping is where the variable is availble. With var, varibles a are global. They can both be changed and redefined.
//with var we have global scope and functional scoping
var names = ["brian", "mwambia", "tony"];
names = "brian"; //Available averywhere
var names = [3, 4, 5, 6, 6];
console.log(names);
function greeting() {
  var name = "brian"; //not availble outside the function
  console.log(`hello ${name}`);
}
// console.log(name);
greeting();
//ES6
const counter = [5, 6, 6]; //cant be redesigned nor changed----always use const.
//when you want to redesign later use let
//with let and const you have global scope, functional scope and block scope.
const List = [9, 9, 9, 4, 4];
for (let i = 0; i < List.length; i++) {
  console.log(i);
}
//concatenation
const nam = "brian";
console.log("My name is" + nam);
//Template literals
console.log(`My name is ${nam}`);
//object destructuring
const user = {
  name: "brian",
  age: 21,
};
const { name, age } = user;
console.log(age);
