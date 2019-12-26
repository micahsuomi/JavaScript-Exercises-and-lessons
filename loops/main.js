//for loops

for(let i = 0; i <= 5; i++) {
    console.log(i);
}

let i = 0;
while(i < 5) {
    console.log(i);
    i++;
}


//Iterate 0 to 10 using for loop, do the same using while and do while loop.

console.log("With FOR LOOP");
for(let i = 10; i > 0; i--) {
    console.log(i);
}

let a = 0;
while(a <= 10) {
    console.log(a);
    a++;
}

let b = 0;
do {
    console.log(b);
    b++;
}    while(b < 11);

let count = "#"
for(let c = 0; c <= 6; c++) {
    count = count + c
    console.log(count);

    }


let arr = ["HTML", "CSS", "JavaSCript"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} 

//Loop through 100 count and print only odd numbers
for(let i = 0; i < 100; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}


//Loop through 100 count and print only odd numbers
for (let i = 0; i < 100; i++) {
    if (i % 2 !==0) {
    console.log(i);
}
}

//use a for loop to iterate from 0 to 100 and print the summ of all numbers

let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum); //returns 5050


// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumOfEvens = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumOfEvens = sumOfEvens + i;
    }
}
console.log(sumOfEvens); //returns 2550 

let sumOfOdds = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        sumOfOdds = sumOfOdds + i;
    }
}
console.log(sumOfOdds); //returns 2500



let animals = ["Dog", "Cat", "Bird", "Snake", "Dinosour", "Tiger", "Lion", "Panther", "Elephant", "Fish"];

let company = "Apple";
console.log(company.startsWith("A"))
console.log(animals);
console.log(animals.pop([2]));
console.log(animals.length);
let lastIndex = animals.length - 1;
console.log(animals[lastIndex]);




