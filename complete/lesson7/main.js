
//selector
/*const title = document.getElementById('title');
console.log(title);
title.style.color = 'green';
title.textContent = 'I like to change the text';
title.style.background = 'yellow';
title.innerHTML = '<span>This is a DOM lesson</span>'*/
/*
const titles = document.getElementsByClassName('dom'); 
const firstElement = document.querySelector('p')
const firstTitle = document.querySelector('#first-title');
const allTitles = document.querySelectorAll('.dom');
console.log(firstTitle);
console.log(allTitles);


allTitles.forEach((element, i) => {
    console.log(element, i)
})*/

const container = document.querySelector('.flex-container');

/*
const titlesArr = Array.from(titles);
console.log(titles);
console.log(titlesArr);
titlesArr.forEach((element, i) => {
    console.log(element, i);
    if(i % 2 === 0) {
        element.style.color = 'blue';
    } else {
        element.style.backgroundColor = 'yellow';
        element.style.fontSize = '50px';
        element.style.fontFamily = 'Arial'
    }
})*/

//Creation

/*
const generateHexaColor = () => {
    let lettersNums = '0123456789abcdef';
    let hexaColor = '';
    for(let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * lettersNums.length);
        hexaColor = hexaColor + lettersNums[randomIndex]; 

    }
    return `#${hexaColor}`
}


console.log(generateHexaColor())
for(let i = 0; i < 16; i++) {
    const title = document.createElement('h1');
    const div = document.createElement('div');
    let bgColor = generateHexaColor();
    div.innerHTML = bgColor;
    div.style.background = bgColor;
    div.setAttribute('class','num');
    div.setAttribute('id', 'hexa');
    div.append(title);
    container.append(div);

}

//calculate weight
const button = document.querySelector('.btn');
const gravityInput = document.querySelector('#gravity');
const massInput = document.querySelector('#mass');

button.textContent = 'Calculate Mass';
button.addEventListener('click', calculateWeight = () => {
    const mass = massInput.value;
    const gravity = gravityInput.value; 
    let weight = mass * gravity;
    const result = document.createElement('p');
    if(mass > 0 && gravity > 0) {
        result.textContent = `${weight}N`;
        result.style.color = 'green';

    } else {
        result.textContent = 'Mass and Gravity is required';
        result.style.color = 'red';
    }
    document.body.appendChild(result);

   
    


})


/*const input = document.querySelector('#mass2');
const p = document.querySelector('#paragraph')
input.addEventListener('input', (event) => {
    p.textContent = event.target.value;
    console.log(event.target.value);
});*/
/*
const form = document.querySelector('form');
const input = document.querySelector('#mass2');
const p = document.querySelector('#paragraph')
const submit = document.querySelector('#submit')
submit.addEventListener('submit', (event) => {
    event.preventDefault();
    input.addEventListener('input', (e) => {
        console.log(e.target.value);
    })
  
});

const input2 = document.querySelector('#first_name');
const p2 = document.querySelector('#paragraph2')
const stopBtn = document.querySelector('.stop-btn');


document.getElementById("submit-btn").addEventListener("submit", function(event){
    event.preventDefault()
    input2.addEventListener('input',(e) => {
        console.log(e.target.value)
        p2.textContent = e.target.value
        
    })
  });

  
    for(let i = 0; i < 16; i++) {
        let count = 0;

        const title = document.createElement('h1');
        const div = document.createElement('div');
        //setInterval takes a callback and a duration
        // let interval = setInterval(() => {
        let bgColor = generateHexaColor();

        div.innerHTML = bgColor;
        div.style.background = bgColor;
        div.setAttribute('class','num');
        div.setAttribute('id', 'hexa');
        count++
        console.log(count)
        // }, 3000);
        
        div.append(title);
        container.append(div);

        stopBtn.addEventListener('click', () => {
            clearInterval(interval)
        });

    }

   

  

    //setTimeout(calback, duration)
    setTimeout(function() {
        console.log('it is time for a break');
    }, 3000);


    


//EVENTS
// Onclick
// onmouseover
// onmouseout
// button.addEventListener('type', callback)


const btngen = document.querySelector('.btn-generate');
const input3 = document.querySelector('.text-input');
const keyCode = document.querySelector('.key-code')
input3.addEventListener('keydown', (e) => {
    keyCode.textContent = e.keyCode;
    if(e.keyCode == 13) {
        console.log(input.value);

    }
});
*/
const numbers = [10, 20, 30, 40, 50];
const flex = document.querySelector('.flex-container');
for (const num of numbers) {
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.textContent = num;
    div.appendChild(h1);
    div.style.background ='skyblue';
    div.setAttribute('class', 'num-box');
    flex.appendChild(div);
    document.body.appendChild(flex);
}


    let countriesWrapper = document.querySelector('.country-wrapper');
    let content = '';
    const url = 'https://restcountries.eu/rest/v2/all'
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
    
        for (const country of data) {
            let { name, 
                capital, 
                population, 
                region, 
                languages, 
                flag } = country;

         //one way of doing this
         /*
            const countryDiv = document.createElement('div');
            let countryName = document.createElement('p');
            let countryCapital = document.createElement('p');
            let countryPopulation = document.createElement('p');
            let countryFlag = document.createElement('img');

            countryDiv.setAttribute('class', 'country');
            
            countryName.textContent = `Name: ${name}`;
            countryCapital.textContent = `Capital: ${capital}`;
            countryPopulation.textContent = `Populaton: ${population}`;
            countryFlag.src = flag;
            countryFlag.setAttribute('class', 'flag');
            countryDiv.appendChild(countryName);
            countryDiv.appendChild(countryCapital);
            countryDiv.appendChild(countryPopulation);
            countryDiv.appendChild(countryFlag);
            countriesWrapper.appendChild(countryDiv);*/
            
            content = content +`<div class="country">
                        <h2>${name}</h2>
                        <p>${capital}</p>
                        <p>${population}</p>
                        <img src=${flag} class="flag"></div>`
            countriesWrapper.innerHTML = content;
            console.log(content)

            
        
    }
    });



