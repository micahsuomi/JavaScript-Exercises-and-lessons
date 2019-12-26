//Arrays

//FILTER
let companies = ["Apple", "Google", "Microsoft"];
let filteredCompany = companies.filter( company => company === "Microsoft");
console.log(filteredCompany);

//Arrays exercises

//1. Declare an empty array;
let emptyArr = [];
console.log(emptyArr);

//2. Declare an array with more than 5 number of items
let shoppingCart = ["apple", "orange", "banana", "bread", "eggs", "milk"];

//3. Find the length of your array
console.log(shoppingCart.length);

//4. Get the first item, the middle item and the last item of the array
console.log(shoppingCart[0]);
console.log(shoppingCart[3]);
let lastIndex = shoppingCart.length -1;
console.log(shoppingCart[lastIndex]);



//5. Declare an array called mixedDataTypes,put different data types and in your array and the array size should be greater than 5
const mixedDataTypes = ["Mike", 35, true, null, undefined]
console.log(mixedDataTypes);

//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon.
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

//7. Print the array using console.log()
console.log(itCompanies);

//8. Print the number of companies in the array
console.log(itCompanies.length);

//9. Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[4]);
let lastItCompanyIndex = itCompanies.length -1;
console.log(itCompanies[lastItCompanyIndex]);

//10. Print out each company
for(let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}

//11. Change companies to uppercase and print them out in a new array using map
console.log("============= uppercase with mapping =============");
const displayUppercase = itCompanies.map(company => {
    return company.toUpperCase();
})
console.log(displayUppercase);

//12. uppercase companies and printing them out
console.log("============= uppercase with for loop =============");
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase())
}

//13. uppercase using a for loop and returning the companies in a new array
console.log("============= uppercase with for loop and returning a new array =============");
let uppercaseArr = [];
for (let i = 0; i < itCompanies.length; i++) {
    uppercaseArr.push(itCompanies[i].toUpperCase());

}
console.log(uppercaseArr)



//14. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

const str = itCompanies.toString();
console.log(`${str} are big IT Companies`);

//15. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.

//using for loop
for (let i = 0; i < itCompanies.length; i++) {
    itCompanies.includes("Apple") ? console.log(itCompanies[i]) : console.log("company not found")        
    }


 //using ternary operator   
let doesCompanyExist = itCompanies.includes("Telia");
doesCompanyExist ? console.log(doesCompanyExist) : console.log("company not found");

console.log(itCompanies);
//16. Filter out companies which have more than one 'o' without the filter method
console.log(itCompanies.includes("oo",0));

//17. Sort the array using sort() method
console.log(itCompanies.sort());

//18. Reverse the array without reverse method
console.log("================== reverse array without reverse =====================")
//first we declare an empty array
let reversedArray = [];
let newLength = itCompanies.length - 1;
for (let i = 0; i < newLength; i++) {
    reversedArray[i] = itCompanies.pop();
}
console.log(reversedArray)

//19. Reverse the array using reverse() method
console.log("================== reverse array with reverse() =====================")
console.log(reversedArray.reverse());
console.log(itCompanies);

//.EXTRA put back the original companies on the now empty array of itCompanies
console.log("================== itCompanies array is empty, use push() to put the companies from the reversed array =====================")

for (let i = 0; i < reversedArray.length; i++) {
    itCompanies.push(reversedArray[i]); 
}
console.log(itCompanies);


//20. Slice out the first 3 companies from the array
console.log("============ Slice out the first 3 companies from the array ===============")
itCompanies.slice(0,3);
console.log(itCompanies);

console.log("============ Slice out the last 3 companies from the array ===============")
//21. Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));

//22. Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3));

//23. Remove the first IT company from the array
console.log(itCompanies.shift());

//24. Remove the middle IT company or companies from the array
console.log(itCompanies.splice(3,4));

console.log(itCompanies);
//25. Remove the last IT company from the array
console.log(itCompanies.pop());

//26. Remove all IT companies
/*const removeAllitems = itCompanies.map(company => {
    return company;
})
console.log(removeAllitems.splice());*/
itCompanies.splice(0, 3);
console.log(itCompanies);


/*
const arr = Array();
console.log(arr);
const treeValues = Array(3).fill("apples");
console.log(treeValues);

//concatenate two arrays
const firstList = ["apple", "oranges", "bananas"];
const secondList = ["grapes", "pears", "pinapples"];

const fullList = firstList.concat(secondList);
console.log(fullList);

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.toString());
const names = ["Mike", "John", "Sara", "Johanna"];
console.log(names.join("  "));
console.log(numbers.slice(1,4));
console.log(names.slice());
console.log(names.indexOf(0, numbers.length));
console.log(numbers.splice());
console.log(numbers.splice(0,1));
console.log(numbers.splice(3,3,6,7,8));
numbers.push(6);
console.log(numbers);
console.log(numbers.shift());

const todoList = [
    {
        task:'Learn JavaScript',
        time:'4/3/2019 8:30',
        completed:true
        
    },
    {
        task:'Help some in need',
        time:'4/3/2019 4:00',
        completed:false
        
    },
    {
        task:'Do some physical exercises',
        time:'4/3/2019 6:00',
        completed:false
        
    }]

todoList.push({task: "go to the gym",
               time: '5/3/2019 6:00',
               completed: false});

console.log(todoList);
todoList.splice(0,1);
console.log(todoList);*/