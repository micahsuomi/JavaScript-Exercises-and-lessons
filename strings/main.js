
let company = "Coding Academy";
console.log(company);
console.log("Coding Academy is a " + company.length + " letters word.");
console.log(company.toUpperCase());
console.log(company.toLowerCase());
console.log(company.slice(7));
console.log(company.includes("Academy"));
console.log(company.split());
console.log(company.split(" "));

let companies ="Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split()); //returns a single string in an array;
console.log(companies.split(",")); //returns an array with 7 separate strings;

// console.log(company.replace("Coding", "Microsoft"));
console.log(company.charAt([10]));
let letterStart = company.indexOf("c");
console.log(letterStart);

console.log(company.lastIndexOf("c"));

console.log(company.startsWith("C"));

let sentence = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.search("because"));

// console.log(company.trim());
console.log(company.startsWith("C"));
console.log(company.endsWith("y"));
console.log(company.match("c"));
console.log(sentence.match("because"));

let companyLetterOne = "Coding";
let companyLetterTwo = " Academy";

let companyFullName = companyLetterOne.concat(companyLetterTwo);

console.log(companyFullName);
console.log(companyFullName.repeat(5))

let sentenceSalary = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."

//extract numbers from sentence
let monthlySalary = parseInt(sentenceSalary.match("5000"));
let annualBonus = parseInt(sentenceSalary.match("10000"));
let onlineCourses = parseInt(sentenceSalary.match("15000"));

totalAnnualIncome = (monthlySalary *12) + annualBonus + (onlineCourses * 12);

console.log(totalAnnualIncome.toString());




