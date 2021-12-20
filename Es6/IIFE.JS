// Immediately Invoked function expression----> Thes e are functions that are automatically invoked without being called
//A function can either be defined as 1. A function declration 2. A function expression
// In function expression the key word function is not the first word
//Afunction expression can be stored in a variable
// Functions declaration are not executed. They are stored for execution latrer when invoked
//in function expression, an anonymous function(function with no name) or a arrow function get stored in a variable
// In javascript, functions can also be defined using the Function() construction
//
///used for data privacy
//many libraries uses this...jquery
//it scopes data
(function () {
  var name = "brian";
  console.log("My name is Brian");
})();
// console.log(name); //throws an error no global variable in IIFE.
//FUNCTIONS ARE OBJECTS
//Javascript functions have both methods and properties
