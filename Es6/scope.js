//we have global scope and functional scope.
//GLOBAL SCOPE
// const name = "name";
const age = 13;
function sayName() {
  console.log(`hello ${name}`);
  function sayAge() {
    console.log(`I am ${age}`);
  }
  sayAge();
}
sayName();
//FUNCTIONAL SCOPE
function sayName() {
  const name = "brian";
  console.log(`hello ${name}`);
}
console.log(name); //not accessible
//variable declared inside a function cannot be used outside the function
//but functions not inside a function can be accessed in a function
