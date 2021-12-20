/*******************************ARROW FUNCTIONS*************************** */
/*
Arrow functions are not hoisted. They must be defined before being  invoked. The shine in callback functions
They do not have their own this. Ther are not suitable for object methods defining
You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:
*/
/******************************ES5 FUNCTION DECLARATION************************ */
/*******************************RUN NODE arrowfunction.js*********************** */
function diff(a, b) {
  return console.log(a - b);
}
diff(10, 7);
sum = function (a, b) {
  return console.log(a + b);
};

sum(10, 10);
function isPositive(number) {
  result = number >= 0;
  return console.log(result);
}
isPositive(6);
function randomNumber() {
  return console.log(Math.random() * 1000);
}

document.addEventListener("click", function () {
  //Anonymous function
  console.log("clicked");
});
/*****************************ES6 ARROW FUNCTIONS********************************** */
/*************COMMENT THE CODE ABOVE AND UNCOMMENT BELOW******************************** */
/*
ES6 ARROW FUNCTIONS---WITH LEXICAL THIS
 If there is only one to do but if there is a block, you will need the curl braces and the return keyword
*/
let sum = (a, b) => console.log(a + b);

let randomNumber = () => console.log(Math.random() * 1000);

document.addEventListener("click", () => console.log("clicked"));
let isPositive = (number) => console.log(number >= 0);

randomNumber();
isPositive(6);
sum(5, 10);
/************************ARROW FUNCTIONS AND THIS************************************ */
/***********COMMENT THE CODE ABOVE AND UNCOMMENT THE CODE BELOW*********************** */
/*
Arrow functions dont rebind THIS 
The strict mode does not override the default behaviour in callback functions(not arrow function) when we console  THIS keyword. Default is the window object.
When you use arrow function as a callback function, THIS keyword does not get reassigned, it still point to the object
 */
const user = {
  name: "brian",
  gender: "male",
  friends: ["ed", "traversey", "caleb"],
  //ES6
  talk() {
    console.log(`hello ${this.friends[1]}`);
  },
};
user.talk();
class Person {
  constructor(name) {
    this.name = name;
  }
  printName() {
    setTimeout(function () {
      console.log(`my name is ${this.name}`);
    }, 1000);
  }
  //lexical this scoping--> this get rescoped inside the function.
  printNameArrow() {
    setTimeout(() => {
      console.log(`my name is ${this.name}`);
    }, 100);
  }
}

let peter = new Person("peter");
peter.printNameArrow();
peter.printName(); //Gives the window object since the callback function does  not belong to ANY OBJECT.
// const greet=() {}
