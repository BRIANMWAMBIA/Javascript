//A callback is a function that gets passed as a parameter of another function and get executed after the firat function finishes

//this is synchronous, runs line by lines
const sayName = (name, cb) => {
  console.log("working");
  console.log("working2");
  console.log(`my name is ${name}`);
  cb();
};

function callback() {
  console.log("I am calling back");
}
sayName("brian", callback);

//Asynchronous callback
console.log("first");
//A call back,function passed as an argument
setTimeout(() => {
  console.log("from call back");
}, 2000);
console.log("last");
