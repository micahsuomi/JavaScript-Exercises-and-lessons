console.log(2-1);
console.log(3**2);

function returnLastName(lastName) {
    let firstName = "John";
    console.log(`${firstName} ${lastName}`);
}

returnLastName("Patterson");

const calculateAge = (yearOfBirth) => {
    let age = (2019 - yearOfBirth);
    console.log(age);
    
}

calculateAge(1990);

//Data types : strings, numbers, booleans, null, undefined, symbols
//Variables

let firstName = "Michele";
let lastName = "Zucca";
const space = " ";
// let fullName = firstName + space + lastName;
let fullName = `${firstName} ${lastName}`;
console.log(firstName);
console.log(lastName);
console.log(fullName);

/*let numOne = 6;
let numTwo = 2;
let difference = numOne - numTwo;
let multiply = numOne * numTwo;
let remainder = numOne % numTwo;

console.log(`The difference of ${numOne} and ${numTwo} is ${difference}`);
console.log(`The multiplication of ${numOne} and ${numTwo} is ${multiply}`);
console.log(`The remainder of ${numOne} and ${numTwo} is ${remainder}`);*/

let numOne = 2;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let exp = numOne ** numTwo;


console.log(`${numOne} + ${numTwo} = ${sum} . ${numOne > numTwo ? console.log(" 2 is grater grater than 3") : console.log(" 2 is less than 3")}`);
console.log(`${numOne} - ${numTwo} = ${diff}`);
console.log(`${numOne} * ${numTwo} = ${mult}`);
console.log(`${numOne} ** ${numTwo} = ${exp}`);

//operators: comparison operators: > < >= <= == === != !==
console.log(3 == "3"); //True
console.log(3 === "3"); //False

//Comparison operators
//&& both have to be true
//|| one have to be true


//CONDITIONALS
if(3 === "3" && 2 === 3) {
    console.log("true"); } 
    else {
        console.log("false")
    }

if(3 !== "3" || 2 === 3) {
    console.log("true"); } 
    else {
    console.log("false")
        }

let weather = 'foggy';
/*if (weather === 'rainy') {
    console.log("Take an umbrella!")
} else if (weather == 'sunny') {
    console.log("What a nice weather!");
} else if (weather == 'cloudy') {
    console.log("be prepared for a bit of rain")
} else {
    console.log("how is the weather looking today?")
}*/

switch(weather) {
    case "rainy":
        console.log("Take an umbrella!")
        break;
    case "sunny":
        console.log("What a nice weather!!")
        break;
    case "cloudy":
        console.log("be prepared for a bit of rain!")
        break;
    default: 
        console.log("how is the weather looking today?")

} 

let areYouHungry = '';
//null, undefined are falsy values

areYouHungry ? console.log("go to eat!") : console.log("let's keep the class going");

    