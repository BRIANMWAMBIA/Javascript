//Hoisting---->The compiler collects all variable declarations and functions
//declarations and takes them to the top of the file during program execution.
//
// var a;
// console.log(a);--->undefined
//variable assignment
// a=4
//console.log(a)---->4
greetings(); //it works

//function declaration
function greetings(name) {
  return console.log(`hello ${name}`);
  //return function () {
  //console.log(`Hello ${name}`);
  // };
}
// greetings();
//sayAge ---> say age is not a function
//variable declararion
var sayAge = function () {
  console.log("I am 13");
};
//take note of the function declaration using function expression way
//var  greetings= function () {}
//The const prevent reaassign, in hoisting it prevents use of a variable before initializing it. It assumes you do not wanna call a variable before declaring and initializing it
//
//console.log(a)---->This throws an error---> cannot acces a before intialzing it
//const a=4

//The compiler take your varible and functions declaration and takes them to the top
//age(); ///does not work. age is not a function
//function expression
var age = function () {
  console.log("my name is 13");
};
//when u use const inplace of var, the compiler throws an error since const is never hoisted

// console.log(age); //this thros an error
// const age = 13; ///cannot access age before initializing it.
