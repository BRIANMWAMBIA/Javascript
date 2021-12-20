/*****************************JAVASCRIPT******************************************* */
/*
                                     
Javascript is a lightweight ,cross-platform, object oriented computer programming language. Lightweigt means that it does eat much space and has a simple syntax. Javascript was only used on the browser(client-side)  traditionally but can now be used on the server-side using node.js

//It allows us not only add dynamic effefcts and interactivity to simple websites but also modern robust websites
//Libraries and frameworks---->jquery, angular , react
//There different versions of js----> es5, es6,es7,es8
                           DATA TYPES IN JAVASCRIPT
 There 5 datatypes in javascript: 1. Number---floating,integers, decimals,numbers
2. boolean--->for logical data    3. string 4.null--->non -existent 5.Undefined---> vriables with no values yet
/***********************************DYNAMIC TYPING************************************* */

/*
Javascript has dynamic typing---data typesa are automatcally assigned to variables
opp of strongly typed
camel-casing---best practice for naming variablesThere three ways to add a javascript file into an html file.
1. Inline 2.script tag for external scripts
inline advantage is that we dont have to load a new file
*/
/*****************************TYPECOERCION AND VARIABLE MUTATION************************ */
/***************************** RUN NODE SCRIPT.JS* ********************************** */
/*
javascript changes boolean to a string. Type coercion
Variable mutation basically means to change the value of variable.
*/
// var firstName = "brian";
// var age = 13;
// console.log(firstName + " is " + age + " years old"); //type coercion , convert age into a string
// var height, isMarried; //type coercion
// height = 6;
// isMarried = false;
// console.log(
//   `${firstName}  is  ${age}  years old. Is he married?  ${isMarried}`
// ); //boolean coerced to a string
// age = "twenty-one"; //-->MUTATION Jvascript changes the type automatically.

/*******************************JAVASCRIPT OPERATORS************************ */
/*
Basic Operators
Maths operator, +,-,/,*
logical operator. <, > ,>=
typeof operator console.log(typeof variableName)
operator precedence
*/
/****************************************OBJECTS**************************************** */
/******************COMMENT THE CODE ABOVE AND UNCOMMENT CODE BELOW********** */
/*
Accessing properties of annobject use either dot notation pr bracket notation
in terms of technality we use this BRACKET NOTATION when we dont know ahead of time what property we what to access. Assume that targetMember is an input field in a form and you want to access different properties of the object depeending what the user enters. Use dot notation when you know the property that you wnat to access prior
*/
// const person = {
//   name: "mosh",
//   walk: function () {
//     console.log("mosh is walking");
//   },
//   //modern javascript
//   talk() {
//     console.log("mosh is talking");
//   },
// };
// person.talk(); // DOT NOTATION
// const targetMember = "name";
// person[targetMember] = "dev ed"; //BRACKET NOTATION

/******************************THIS KEYWORD********************************* */
/********************COMMENT THE CODE ABOVE AND UNCOMMENT THE ONE BELOW**************** */
/*THIS keyword in javascript work different in  javascript compared to other programming languages. Is value is determined by how  a  function is called. If you call a function inside an abject as a method, THIS  will return a refefnce to that object. However, if you call a function as a standalone object or outside of an object, THIS will return the global object which is the window object in the browsers
Strict mode. It allows us to execute javascript in a more protected wat preventing potential problems. If strict mode is enabled, THIS returns undefined for objects outside an object
*/
// const car = {
//   brand: "toyota",
//   model: "axios",
//   showBrand() {
//     console.log(`This is a brand new  ${this.brand} ${this.model} `);
//   },
// };
// car.showBrand(); //INSIDE AN OBJECT
// function showType() {
//   console.log(this); //GLOBAL OBJECT
// }
// const show = car.showBrand;
// show(); ////outside an object
// showType(); //standalone
/*************************************************************************************** */
/*****************************BINDING THIS****************************************** */
/***********COMMENT THE CODE ABOVE AND UNCOMMENT THE CODE BELOW******************** */
/*
Remember in javascript, function are objects. This means they have several methods you can call on them. 
One of the methods is thr Bind method.
With bind method we can set the value of this permanently. The value of this is the argument we pass to the bind method
 */
// const car = {
//   brand: "toyota",
//   model: "axios",
//   showbrand() {
//     console.log(`This is a brand new  ${this.brand} ${this.model} `);
//   },
// };
// const show = car.showbrand.bind(car); //This binds THIS keyword to the car object
// show(); // this returns the car object now.
/************USING DOT NOTATION TO ACCESS OBJECT PROPERTIES**************** */
/*********UNCOMMENT THE CODE BELOW AND COMMENT THE CODE ABOVE************************ */
// const address = {
//   street: "westlands",
//   city: "Nairobi",
//   country: "Kenya",
// };
// const city = address.city;
// console.log(` ${city} city`);
/******************************OBJECT DESTRUCTURING********************************* */
/*********UNCOMMENT THE CODE BELOW AND COMMENT THE CODE ABOVE************************ */
/*
Used when you want to access properties of an object and store them in a variable
*/
// const address = {
//   street: "westlands",
//   city: "Nairobi",
//   country: "Kenya",
// };
// const { street } = address; //can set alias using the colon street: st
// console.log(`street: ${street}`);
/***************************CONCATANATING TWO ARRAYS********************************** */
/*********UNCOMMENT THE CODE BELOW AND COMMENT THE CODE ABOVE************************ */
// const first = [5, 6, 7, 8];
// const second = [112, 466, 444];
// const combined = first.concat(second);
// console.log(combined);
/**************************************USING SPREAD OPERATORS********************* */
/*********UNCOMMENT THE CODE BELOW AND COMMENT THE CODE ABOVE************************ */
/*
We create a new array and sprread the two arrays in ithe new arrary ...
This way you can add new elements into the array
When we apply spread operator on an array we get individual item in that array
we can easily clone an array easily using the spread operator
 */

// const combined = [...first, ...second];
// console.log(combined);

// const clone = [...first];
// console.log(`cloned array ${clone}`);

/***************************SPREAD OPERATOR ON OBJECTS********************************** */
/*********UNCOMMENT THE CODE BELOW AND COMMENT THE CODE ABOVE************************ */
// const first = { name: "brian" };
// const second = { job: "driver" };
// const combined = { ...first.name, ...second }; // can optionally add more propeties
// console.log(`Combined objects ${combined}`);
// const clone = { ...first };
// console.log(`Cloned object ${clone}`);
/*********************************CLASSES******************************************* */
/*********UNCOMMENT THE CODE BELOW AND COMMENT THE CODE ABOVE************************ */
/*
A blue print for creating objects when the objects have atleast one method.
Use pascal naming
Incase there is something to change, change is made at one point
*/
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   talk() {
//     console.log(`hello ${this.name}`);
//   }
// }
// const person = new Person("brian");
// person.talk();
/**********************************INHERITANCE***************************************** */
/****************UNCOMMENT THE CODE BELOW AND COMMENT THE CODE ABOVE******************* */
/*
This involves more than one class where you want to duplicate properties and methods of one class into another class
 */
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   talk() {
//     console.log(`hello ${this.name}`);
//   }
// }
// class Teacher extends Person {
//   constructor(name, degree) {
//     super(name); //refer to the base class
//     this.degree = degree;
//   }
//   walk() {
//     console.log("Am walking");
//   }
// }
// const teacher = new Teacher("brian", "bachelors");
// teacher.talk();
/**************************************MODULES**************************************** */
/****************UNCOMMENT THE CODE BELOW AND COMMENT THE CODE ABOVE******************* */
/*
Allows to write our code in different files. Eac file becomes a module.
Ojects defined in a moduke are private in that module by default
we have default exports and named exports
we can export more than one object from a module using named exports
We use default export if there is only one object to be exported in a module.
A class is technically an object in javascript
we use curl braces to import the named exports only.
import {...} from './'
It is poosible that a module has a default export as well as a batch of named exports. React module is an example
import React,{Components} from 'react'
*/
