//callstack is a datastructure that can dictates how our program run and get executed
//When the whole file get to run, the main() get called, then when a function get called, it is pushed on top to the stack.
///Once a function get done executing, it ger popped from the stack
function sayHello() {
  console.log("Hello world");
}
//function declaration
function sayAge() {
  //global function
  console.log("I am 13");
}
//function declaratioin
function sayAll() {
  //function invocation
  sayAge();
  sayHello();
}
//function invocation
sayAll();
//global function
console.log("final");

//CALLBACK QUEUE AND EVENT LOOP
// When an asynchronous/web api function is encountered in your code, it gets executed on the background/behond the scenes  and when it completes it get passed into the callback queue. The web api keep the track on the execution of the asynchronous type
//The work of the event queue is to get the first item in the callback queue and puts it on the callback stack for execution. This only happens when the callstack is empty.

//ASYNC AWAIT
//It makes our code look synchronous yet being async.
async function getData() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done"), 2000);
  });
  let result = await promise;
  console.log(result);
}
getData();
