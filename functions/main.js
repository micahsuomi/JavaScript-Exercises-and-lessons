//FUNCTIONS EXERCISES

//1. Declare a function fullName and it print out your full name.
console.log('== Declare a function fullName and it print out your full name.==')
function fullName() {
    console.log("Michele Zucca");
}
fullName();

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
    return(firstName + " " + lastName);
}
console.log(fullName("Michele", "Zucca"));

// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.
console.log('==Declare a function addNumbers and it takes two two parameters and it returns sum.==')
function addNumbers(a,b) {
    return a + b;
}
console.log(addNumbers(10,25));

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
console.log('============= calculate area of a rectangle ==============')
function areaOfRectangle(length, width) {
    return length * width;
}
console.log(areaOfRectangle(30,40));


//5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
console.log('========= A perimeter of a rectangle =============')
function perimeterOfRectangle(length, width) {
    let area = 2*(length + width);
    return area;
} console.log(perimeterOfRectangle(50,70));

//6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
console.log('======== A volume of a rectangular prism  ============')
function volumeOfRectPrism(length, width, height) {
    let area = length * width * height;
    return area;
} console.log(volumeOfRectPrism(40,35,67));

//7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
console.log('========= calculate area of a circle =========')

function areaOfCircle(r) {
    let area =Math.floor(Math.PI * (r * r));
    return area;
} console.log(areaOfCircle(25));

//8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
console.log('========= calculate Circumference of a circle =========')

function circumOfCircle (r) {
    let circumference = Math.floor(Math.PI * (r * r));
    return circumference;
} console.log(circumOfCircle(50));


//9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
console.log('========= calculate Density of a substance =========')

function densityOfSubstance(mass, volume) {
    let density = mass % volume;
    return density;
} console.log(densityOfSubstance(40,32));

//10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
console.log('========= calculate speed =========')

function speedCalculator(distance, time) {
    let speed = distance / time;
    return speed;
}   console.log(speedCalculator(200, 90));

//11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
console.log('========= calculate weight of a substance =========')

function calculateWeight(mass, gravity) {
    let weight = mass * gravity;
    return weight;
} console.log(calculateWeight(100, 50));

//12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
console.log('========= calculate temperature in oC =========')

function convertCelciusToFahrenheit(oC) {
    let oF = (oC * (9 / 5)) + 32;
    return oF;
} console.log(convertCelciusToFahrenheit(15));


//13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
console.log("=========== Calculate BMI ===============")
calculateBMI = (kg, height) => {
    let BMI = Math.round(kg / (height**2));
    if (BMI < 18.5) {
        console.log('Underweight')
    } else if (BMI >= 18.5 || BMI === 24.9) {
        console.log('Normal Weight')
    } else if (BMI === 25 || BMI === 29.9) {
        console.log('Overweight')
    } else if (BMI >= 30) {
        console.log('Obese')
    }
    return BMI
}
  

console.log(calculateBMI(100, 1.70));

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

//14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

console.log('===== function checkSeason, takes a month parameter and returns the season ==')
function checkSeason(month) {
    if(month === "September" || month === "October" || month === "November") {
        console.log("Autumn");
    } else if(month === "December" || month === "January" || month === "February") {
        console.log("Winter"); 
    } else if(month === "March" || month === "April" || month === "May") {
        console.log("Spring"); 
    } else if(month === "June" || month === "July" || month === "August") {
        console.log("Summer"); 
    }
    
} checkSeason("June");


//15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
console.log('================== Write a function findMax ====================')
function findMax(a,b,c) {
    if (a > b && a > c) {
        console.log(a); 
    } else if (b > a && b > c) {
        console.log(b); 
    } else {
        console.log(c); 
    } 
}

findMax(0, 10, 5);
findMax(0, -10, -2);

// console.log(findMax(0, 10, 5));
// 10;
// console.log(findMax(0, -10, -2));
// 0;


//16. Linear equation is calculated as follows: ax + b = c. Write a function which calculates value of a linear equation, solveLinEquation.
const solveLinEquation = () => {

}

//17. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
const solveQuadEquation = () => {

}

//18. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
console.log('======= Declare a function name printArray ==============')
function printArray(arr) {
  
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
console.log(printArray(["volvo", "honda", "fiat", "mercedes"]));

//19. Declare a function name swapValues. This function swaps value of x to y.
// swapValues(3, 4); // x => 4, y=>3
// swapValues(4, 5); // x = 5, y = 4

console.log("============ swap values")
function swapValues(x,y) {   
    return [x, y] = [y, x].toString();
}

console.log(swapValues(3,4));


//20. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
console.log("============= reverse array")
function reverseArray(arr) {
    var output = [];
    while (arr.length) {
        output.push(arr.pop());
    } return output;
    } console.log(reverseArray([1,2,3,4,5]));

    function reverseArray(arr) {
        var output = [];
        while (arr.length) {
            output.push(arr.pop());
        } return output;
        } console.log(reverseArray(["a","b","c","d","e"]));


// console.log(reverseArray([1, 2, 3, 4, 5]));
// [5, 4, 3, 2, 1];
// console.log(reverseArray(['A', 'B', 'C']));
// ['C', 'B', 'A'];


//21.  Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
console.log("============ capitalize array ===============")
let shoppingCart = ["apples", "bananas", "oranges", "strawberries", "grapes"];
let shoppingCapitalized = shoppingCart.map(function shoppingCapitalized(item) {
    return item.toUpperCase();

})

console.log(shoppingCapitalized);


capitalizeArray = (array) => {
    for (let i = 0; i < array.length; i++) {
         console.log(array[i].toUpperCase());
    }
}
console.log(capitalizeArray(["apple", "banana", "grapes", "avocado", "pinapple"]));


//22. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

console.log('=================== function addItem =============')
const addItem = (arr, newItem) => {
        arr.push(newItem)
        return arr
} 

console.log(addItem(["Pasta", "Chicken", "Fish", "Prawns", "Noodles" ], 'Salad'));

/*

let lunchMenu = ["Pasta", "Chicken", "Fish", "Prawns", "Noodles" ];
lunchMenu.push('Salad')
console.log(lunchMenu)*/




//23. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
 
console.log('================= function removeItem ==============')
    removeItem = (index) => {
        let arrNames = ["Mike", "John", "Aurora", "Callum", "Mona"];
        return arrNames.splice(index)
    }   
        console.log(removeItem(1,1));
        
console.log("============== sumOfNumbers")
//24. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
    sumOfNumbers = (num) => {
        let sum = 0;
        for (let i = 0; i < num; i++) {
            sum = sum + i;
        } return sum;
    }

    console.log(sumOfNumbers(50));



//25. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
console.log("=============== sumOfOdds ================")

    sumOfOdds = (num) => {
        let sum = 0;
        for (let i = 0; i < num; i++) {
            if (i % 2 !== 0) {
                sum = sum + i;
            }
        }
        return sum;
    }

    console.log(sumOfOdds(100))

//26. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

console.log("=============== sumOfEven ================")

    sumOfEven = (num) => {
        let sum = 0;
        for (let i = 0; i < num; i++) {
            if(i % 2 === 0) {
                sum = sum + i;
            }
        }
        return sum;
    }

    console.log(sumOfEven(100));

//27. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
console.log("===================even and odds==============");
const evensAndOdds = (num) => {
    let countEvens = 0;
    let countOdds = 0;
    for (let i = 0; i < num +1; i++) {
        if (i % 2 === 0) {
            countEvens = countEvens + num[i];
            console.log(countEvens)

         } else if(i % 2 !== 0) {
             countOdds = countOdds + num[i];
         }
        }  
        

        return countOdds     


    }

console.log(evensAndOdds(100));

// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.

const testOdds = (num) => {
    let countOdds = 0;
    for (let i = 0; i < num + 1; i++) {
        if(i % 2 !== 0) {
            countOdds = countOdds + num[i];
            console.log(countOdds)
        }
    }
    return countOdds
} 
console.log(testOdds(100));

    

//28. Write a functon which takes any number of arguments and return the sum of the arguments
// sum(1, 2, 3); // -> 6
// sum(1, 2, 3, 4); // -> 10
console.log("================ sum of arguments ================")
function sumNumbers(num1,num2,num3) {
    return num1 + num2 + num3
}
console.log(sumNumbers(1,2,3));

//29. Write a function which generates a randomUserIp.
//example Addresses 128.0.0.0 to 191.255.255.255
console.log("=============== random IP address ================");
randomIpAddress = () => {
    let userIP = [];
    for (let i = 0; i <= 3; i++) {
        let randomIP = Math.floor(Math.random() * 255)
        userIP.push(randomIP);
        joinedIP = userIP.join(".")
        
    }
    return joinedIP;
}

console.log(randomIpAddress());


//30. Write a function which generates a randomMacAddress
//example 00:A0:C9:14:C8:29
console.log('====== Write a function which generates a randomMacAddress =====')
const randomMacAddress = () => {
    let macAddressNums = [];
    let macAddressLetters = []
    let randomLetters = '1234567890ABCDEFGHJKILMNOPQRSTUVWYZabcdefghijklmnopqrstuvwyx'.split("");
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * 99);
        macAddressNums.push(random);
        let randomLetter = randomLetters[Math.floor(Math.random() * randomLetters.length)];
        macAddressLetters.push(randomLetter)
        joinedMacAddressNums = macAddressNums.join(':')
        joinedMacAddress = `${joinedMacAddressNums}`
    }
    return joinedMacAddress
}

console.log(randomMacAddress());



//31. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

console.log("================== randomHexaNumberGenerator =================");
function generateHexaColors() {
    let lettersNums = "0123456abcdef".split("");
    let randomHexa = [];
    for (let i = 0; i < 6; i++) {
        let random = lettersNums[Math.floor(Math.random() * lettersNums.length)];
        randomHexa.push(random);
    }

    return `#${randomHexa.join("")}`
}

console.log(generateHexaColors());

// console.log(randomHexaNumberGenerator());
// '#ee33df'

//32 Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

console.log("================ userID generator =================")

userIdGenerator = () => {
    let numbersLetters = "1234567890ABCDEFGHJKILMNOPQRSTUVWYZabcdefghijklmnopqrstuvwyx".split("");
    let idContainer = [];
    for (let i = 0; i < 7; i++) {
        let randomNum = numbersLetters[Math.floor(Math.random() * numbersLetters.length)];
        idContainer.push(randomNum);
    }
    let idContainerJoined = idContainer.join("");
    return idContainerJoined;

}

console.log(userIdGenerator());

let IDdisplayed = document.querySelector('.user-id');
let btnGenerateID = document.querySelector('.btn-generate-id');

btnGenerateID.addEventListener('click', userIdGeneratorDisplayed = () => {
    IDdisplayed.innerHTML = userIdGeneratorDisplayed();

})
userIdGeneratorDisplayed = () => {
    let numbersLetters = "1234567890ABCDEFGHJKILMNOPQRSTUVWYZabcdefghijklmnopqrstuvwyx".split("");
    let idContainer = [];
    for (let i = 0; i < 27; i++) {
        let randomNum = numbersLetters[Math.floor(Math.random() * numbersLetters.length)];
        idContainer.push(randomNum);
    }
    let idContainerJoined = idContainer.join("");
    return idContainerJoined;

}

console.log(userIdGeneratorDisplayed());





// console.log(userIdGenerator());
// 41XTDbE


//33. Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr


//34. Write a function name rgbColorGenerator and it generates rgb colors.

console.log("============ RGB color generator ==================")
rgbColorGenerator = () => {  
    let rgbOutput = []; 
    
    //iteration has to return 9 values
    for (i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * 256);
        rgbOutput.push(random);

    }
    return rgbOutput 
}
console.log(`rgb(${rgbColorGenerator()})`);
// rgbColorGenerator()
// rgb(125,244,255)



//35. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
console.log('=========== HEXA colors in an array ================')

function arrayOfHexaColors() {
    let hexaNumbers = "abcdef1234567890";
    let hexaOutput = []
    for (let i = 0; i < 6; i++) {
        let randomHexa = hexaNumbers[(Math.floor(Math.random() * hexaNumbers.length))];
        hexaOutput.push(randomHexa);
    }
    return `#${hexaOutput.join('')}`;
}

console.log(arrayOfHexaColors());


//36. Write a function arrayOfRgbColors which return any number of RGB colors in an array.
console.log('=========== RGB colors in an array ================')
arrayOfRgbColors = () => {
    let rgbOutput = [];
    for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * 255);
        rgbOutput.push(random)
    }

    return rgbOutput;
   
}

console.log(arrayOfRgbColors());

//37. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

//38. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

//39. Write a function generateColors which can generate any number of hexa or rgb colors.
//   generateColors('hexa', 3)
//   ['#a3e12f','#03ed55','#eb3d2b']
//   generateColors('hexa', 1)
//   '#b334ef'
        

//   generateColors('rgb', 3)
//   ['rgb(5, 55, 175','rgb(50, 105, 100','rgb(15, 26, 80']
//   generateColors('rgb', 1)
//   'rgb(33,79, 176)'

console.log('=== Write a function generateColors which can generate any number of hexa or rgb colors ===')
const generateColors = (type) => {
    let rgb = [];
    let hexa = []

    if (type === 'rgb') {
        for (let i = 0; i < 3; i++) {
            let random = Math.floor(Math.random() * 255);
            rgb.push(random)
        }
    
        return rgb;

    } else if( type === 'hexa') {
        let hexaNumbers = "abcdef1234567890";
    for (let i = 0; i < 6; i++) {
        let randomHexa = hexaNumbers[(Math.floor(Math.random() * hexaNumbers.length))];
        hexa.push(randomHexa);
    }
    return `#${hexa.join('')}`;
    }

}

console.log(generateColors('rgb'))

    
//40. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

console.log("============ shuffle array ================")
const shuffleArr = (arrayCars) => {
    //loop into the length of the array in reverse
    for (let i = arrayCars.length - 1; i > 0; i--) {
        //generate a random index from the array and store it into a variable
        const random = Math.round(Math.random() * i);

        const randTemp = arrayCars[i];
        //the index of array of cars is equal to the random index
        arrayCars[i] = arrayCars[random];
        arrayCars[random] = randTemp

    }
    return arrayCars
}

console.log(shuffleArr([34, 19, 30, 11, 23, 18, 89, 48]));

//41. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

console.log('============== factorial ===============');

    factorial = (n) => {

       if (n < 0) {
          return -1
       }  else if (n === 0) {
           return 1
       } else {
        return (n * factorial(n - 1));
        }
    }
        console.log(factorial(8))

//42. Call your function isEmpty, it takes a parameter and it checks if it is empty or not
console.log('============= is empty ===============')

    const isEmpty = (str) => {
        return (!str || /^\s*$/.test(str));

    }
    console.log(isEmpty(''))


//43. Call your function sum, it takes any number of arguments and it returns the sum.
console.log('==== function sum, it takes any number of arguments and it returns the sum. =====')

function sum(a,b,c) {
    return a + b + c;
} console.log(sum(1929, 122, 121));

//44. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
console.log('====== sum of arrays =========================================')
sumOfArrayItems = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        //the sum is equal to the initial sum plus the value of the array at index[i]
         sum = sum + arr[i];
    }
    return sum;
}
console.log(sumOfArrayItems([25,50,10,5,23]))

//45. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
console.log("=========== write a function called average ========")
const findAverage = (arr) => {
    let sum = 0;
    let arrayIndexCount = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i] 
        console.log(typeof(arr[i]))
     
    }
    let average = Math.round(sum / arr.length);
    return average

}
console.log(findAverage([20,11,49,67,34]));



//46. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
console.log("======= write a function that modifies the fifth item of the array =======")
    modifyArray = (arr) => {
        let output = [];
        for (let i = 0; i < arr.length; i++) {
            let newWords = arr[i].slice();
            if (arr.length === 5) {
                newWords[4].toUpperCase()
            }
            output.push(newWords);

        }
    
        return output;       
    }
    console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
let people = ['Mike', 'John', 'Carl', 'Dave', 'Kati'];
let people2 = [];
console.log(people[4].toUpperCase())
console.log(people2.push(people))
console.log(people2)
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// // →['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']

otherCapitalize = (arr) => {
    let output = [];
    for (i = 0; i < arr.length; i++) {
        newCapitalizedWord = arr[i].toUpperCase();
        output.push(newCapitalizedWord); 
    }
    return output
}

console.log(otherCapitalize(['Amazon', 'Google', 'Facebook', 'Tesla']))



// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// // →['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
// // →'Not Found'

//47. Write a function called isPrime, which checks if a number is prime number.
console.log('=========== checks if a number is prime number ===============')
const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        console.log(i)
    if (num % i === 0) {
        return false
    }
}
    return num > 1;
}

console.log(isPrime(3))

//48. Write a function which checks if all items are unique in the array.
console.log('==  Write a functions which checks if all items are unique in the array ==')
    
const isUnique = () => {
const arr = [11,12];
    for (const item of arr) {
        if (arr[0] !== item) {
            return true
        }
    }

    return false
}
console.log(isUnique())


//49. Write a function which checks if all the items of the array are the same data type.
console.log('Write a function which checks if all the items of the array are the same data type')
const nums = [true, 2, 'Michele', {name:'Asa'}, ['HTML','CSS'], 10, 'Amazon'];
const names = ['Asa','dog','cat'];
 
const checkDataType = (arr) => {
    
    const types = [];
    for (const num of arr) {
        types.push(typeof(num))
    } 
    for (const type of types) {
        if (types[0] !== type) {
            return false
        } 
    } 
    return true
}

console.log(checkDataType([true, 2, 'Michele', {name:'Asa'}, ['HTML','CSS'], 10, 'Amazon']))
console.log(checkDataType(['Michele','Dave','Bob']))



//50. JavaScript variable name does not support special characters or symbols except $ or _. Write a function *isValidVariable which check if a variable is valid or invalid variable.
console.log('========= is the variable valid or invalid variable ===========')
isValidVariable = () => {
    let string = "@hohohohoh"
    let symbols = "@£#%&/()[]{}+?´*'-;,:.".split("")
    for (let i = 0; i < symbols.length; i++) {
    }  if (symbols[i].match("@")) {
        console.log('invalid variable')
    } else {
        console.log('valid variable')
    }
    
}
    console.log(isValidVariable());

    console.log('============= match a string ===============')
    let str = "paris is a great city";
    
    if (str.match('paris')) {
        console.log('matching')
    } else {
        console.log('not matching')
    }
    
    
//51. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// sevenRandomNumbers()[(1, 4, 5, 7, 9, 8, 0)];
console.log('Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.')

sevenRandomNums = () => {
    let nums = []
    for (let i = 0; i < 7; i++) {
        let randomNum = Math.floor(Math.random() * 10);
        nums.push(randomNum);
    }
        return nums;
}

console.log(sevenRandomNums());
//CAlculate age - EXTRA

/*
let calculateBtn = document.querySelector(".calculate-age");
let yearInput = document.getElementById("age");
let ageDisplay = document.getElementById("age-field");

calculateBtn.addEventListener('click', function calculateAge (yearOfBirth) {
    let age = 2019 - yearOfBirth; 
    console.log(age);
    ageDisplay.innerHTML = age;
})

function calculateAge(yearOfBirth) {
    let age = 2019 - yearOfBirth;
    console.log(age);
}

calculateAge(1981);*/

let input = document.getElementById('text-input');
let displayTextBtn = document.querySelector('.display-btn');
let textDisplay = document.getElementById('display');


function displayText() {
    document.getElementById('display').innerHTML =
    document.getElementById('text-input').value;
}

let todoList = [{
        task: "take trash",
        duration: "2 minutes",
        
        task: "go to the gym",
        duration: "1 hour",

        task: "pick up daughter",
        duration: "15 minutes"
}]
console.log(todoList);
todoList.push( {task: "go to the course", duration: "8 hours"});
console.log(todoList);

//anonymous function
(function(n) {
    return n * n
})
 

//with DOM manipulation

let generateButton = document.querySelector('.btn-generate');
let box = document.querySelector('.color-box');
let hexaText = document.querySelector('.hexacolor-text');

generateButton.addEventListener('click', randomHexaColors = () => {
    box.style.background = randomHexaColors();
    hexaText.innerHTML = randomHexaColors();
});


randomHexaColors = () => {
    let lettersNums = "0123456abcdef".split("");
    let randomHexa = [];
    for (let i = 0; i < 6; i++) {
        let random = lettersNums[Math.floor(Math.random() * lettersNums.length)];
        randomHexa.push(random);
    }

    return `#${randomHexa.join("")}`
    
}






