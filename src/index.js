
import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const refs = {
    inputEl: document.querySelector('#search-box'),
    listCountryEl: document.querySelector('.country-list'),
    infoCountryEl: document.querySelector('.country-info'),
};

refs.inputEl.addEventListener('input', debounce(onCountryInput, DEBOUNCE_DELAY));


function onCountryInput() {

  // const name = refs.inputEl.value.trim();
  // if (name === '') {
  //   return (refs.listCountryEl.innerHTML = ''), (refs.inputEl.innerHTML = '');
  // };

  fetchCountries()
    .then(country => {
        refs.listCountryEl.innerHTML = '';
        refs.infoCountryEl.innerHTML = '';

      if (country.length === 1) {
        refs.infoCountryEl.insertAdjacentHTML('beforeend', markupCountryInfo(country));
      } else if (country.length >= 10) {
        returnMoreCountries();
      } else {
        refs.listCountryEl.insertAdjacentHTML('beforeend', markupCountryList(country));
      }
    })
    .catch(returnLessCountries);
};

function returnMoreCountries() {
  Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
};

function returnLessCountries() {
  Notiflix.Notify.failure('Oops, there is no country with that name');
};


function markupCountryList(country) {
  return country
    .map(({ name, flags }) => {
      return markup = `
          <li class="country-list__item">
              <img class="country-list__item--flag" src="${flags.svg}" alt="${name.official}">
              <h2 class="country-list__item--name">${name.official}</h2>
          </li>
          `;
    })
    .join('');
};

function markupCountryInfo(country) {
  return country
    .map(({ name, flags, capital, population, languages }) => {
      return markup = `
        <ul class="country-info__list">
            <li class="country-info__item">
              <img class="country-info__item--flag" src="${flags.svg}" alt="${name.official}">
              <h2 class="country-info__item--name">${name.official}</h2>
            </li>
            <li class="country-info__item"><span class="country-info__item--descr">Capital: </span>${capital}</li>
            <li class="country-info__item"><span class="country-info__item--descr">Population: </span>${population}</li>
            <li class="country-info__item"><span class="country-info__item--descr">Languages: </span>${Object.values(languages, ).join(', ')}</li>
        </ul>
        `;
    })
    .join('');
};