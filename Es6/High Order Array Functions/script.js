const companies = [
  { name: "Company one", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Technology", start: 1989, end: 2010 },
  { name: "Company Five", category: "Retail", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Technology", start: 1986, end: 1989 },
  { name: "Company Eight", category: "Finance", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Auto", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
/**************************FOR LOOP PRINTING ELEMENTS OF THE ARRAY********************** */
/***********************************RUN NODE SCRIPT.JS********************************* */
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
//}
/*******************************FOREACH TO PRINT*************************************** */
/*********UNCOMMENT THE LINE BELOW AND COMMENT THE CODE ABOVE************************* */
// companies.forEach((company) => console.log(company));
/******************************USING MAP FUNCTION RENDER ***************************** */
/*************UNCOMMENT THE CODE BELOW AND COMMENT THE CODE ABOVE********************** */
/*
create array of campanies names and list of ages squared
usd to render lists
It returns a new array. It does not modify the orignal array
 */

// const companiesName = companies.map((company) => company.name);
// console.log(`1. compnies names ${companiesName}`);
// const agesquared = ages.map((age) => age * 2);
// console.log(`2. squared all the ages ${agesquared}`);
/*****************************FOR LOOP TO FILTER OVER 21 FROM AGES ARRAY*************** */
/************UNCOMMENT THE CODE BELOW AND COMMENT THE CODE ABOVE********************* */

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);
/*******************************FILTER FUNCTION ************************************* */
/********UNCOMMENT THE CODE BELOW AND COMMENT THE CODE BOVE************************** */

// const canDrink = ages.filter((age) => age >= 21);
// console.log(`Over 21 ${canDrink}`);

// const retailCompanies = companies.filter(
//   (company) => (company.category = "Retail")
// );
// console.log(`1. Retail companies ${retailCompanies}`);

// const eightyCompanies = companies.filter(
//   (company) => company.start >= 1980 && company.end < 1990
// );
// console.log(`2. operated in 80s ${eightyCompanies}`);

// const lasted10years = companies.filter(
//   (company) => company.end - company.start >= 10
// );
// console.log(`3. lasted more than 10 years ${lasted10years}`);
/***************FOR LOOP TO GET THE SUM OF ALL AGES INTHE ARRAY**************** */
/************UNCOMMENT THE CODE BELOW AND COMMENT THE CODE ABOVE*************** */

// let sum = 0;
// for (let i = 0; i < ages.length; i++) {
//   sum += ages[i];
// }
// console.log(`1. Total age ${sum}`);
/**************REDUCE TO GET THE SUM OF ALL THE AGES****************************** */
/***********UNCOMMENT THE CODE BELOW AND COMMMENT THE CODE ABOVE****************** */

// const sum = ages.reduce((total, age) => total + age);
// console.log(`Total age ${sum}`);

// const totalYears = companies.reduce(
//   (total, company) => total + (company.end - company.start),
//   0
// );
// console.log(`Total years the companies operated ${totalYears}`);
/*************SORTING THE COMPANIES BY THE START DATES******************************* */
/*************COMMENT THE CODE ABOVE AND UNCOMMENT THE CODE BELOW******************** */

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(`1. Sorted by start date ${sortedCompanies}`);
// const sortedAges = ages.sort((a, b) => a - b);
// console.log(`2. Sorted the ages ${sortedAges}`);

/***************************COMBINE ALL THE FUNCTIONS************************** */
/******************** COMMENT THE CODE ABOVE AND UNCOMMENT THE CODE BELOW****** */
const combined = ages
  .map((age) => age * 2)
  .filter((age) => age > 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);
console.log(
  `1. Multiplied all the ages by 2,then filtered the results greter than 40, sorted the results and then added them all together ${combined}`
);
