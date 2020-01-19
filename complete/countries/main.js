
const sortBtn = document.querySelector('.sort');
// sortBtn.addEventListener('click', () => sortCountries())
//display countries

const displayCountries = () => {


const url = 'https://restcountries.eu/rest/v2/all'
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        for (const country of data) {
            let countriesWrapper = document.querySelector('.country-wrapper');
            let totalCountries = document.querySelector('.total-countries');

            let { name, capital, population, region, flag } = country;
         //one way of doing this
            totalCountries.textContent = country.length;
            console.log(country)
            const countryDiv = document.createElement('div');
            let countryName = document.createElement('p');
            let countryRegion = document.createElement('p');
            let countryCapital = document.createElement('p');
            let countryPopulation = document.createElement('p');
            let countryFlag = document.createElement('img');

            countryDiv.setAttribute('class', 'country');
            
            countryName.textContent = name;
            countryName.setAttribute('class', 'country-name');
            countryRegion.textContent = `Region: ${region}`;
            countryCapital.textContent = `Capital: ${capital}`;
            countryPopulation.textContent = `Pop: ${population}`;
            countryFlag.src = flag;
            countryFlag.setAttribute('class', 'flag');
            countryDiv.appendChild(countryName);
            countryDiv.appendChild(countryCapital);
            countryDiv.appendChild(countryRegion);
            countryDiv.appendChild(countryPopulation);
            countryDiv.appendChild(countryFlag);
            countriesWrapper.appendChild(countryDiv);
            
            /*countriesWrapper.innerHtml += `<div>
                        <h2>${name}</h2>
                        <h2>${capital}</h2>
                        <h2>${population}</h2>`*/
            
            
            // let countriesWithLand = name.filter(country => country.includes('land'));
            // console.log(countriesWithLand);
    }
    });
}

const sortCountries = () => {
    let sortedCountries = [...country];
    sortedCountries.reverse();
    console.log(sortedCountries);
}
displayCountries();

    

    // let countriesWithLand = country.name.filter(country => country.includes('land'));
    // console.log(countriesWithLand);