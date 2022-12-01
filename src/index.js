import './css/styles.css';
// import { fetchCountries } from './fetchCountries';
// import debounce from 'lodash.debounce';
// import { Notify } from 'notiflix';


const DEBOUNCE_DELAY = 300;

const refs = {
    inputEl: document.querySelector('search-box'),
    listCountryEl: document.querySelector('.country-list'),
    infoCountryEl: document.querySelector('.country-info'),
};

fetch(`https://restcountries.com/v3.1/name/peru`)
    .then(response => {
        return response.json();
})
.then(name => {
    console.log(name.car);
    // const markup = countryCard(name);
    // console.log(markup);
})
.catch(error => {
    console.log(error);
});

function generationCountry(country) {
    return `<li><img src="${country.flags}" alt="${country.official}" width="60" height="40">${country.official}</li>`;
}
console.log(generationCountry('country'));

const generatingOneCountryInDom = (country) => {
  
    return `<h2><img src="" alt="${country.name}" width = 40px class="country-flag"> ${country.name}</h2>
          <p><b>Capital:</b> ${country.capital}</p>
          <p><b>Population:</b> ${country.population}</p>`;
};
console.log(generatingOneCountryInDom('country'));



