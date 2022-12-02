const LINK_COUNTRIES = 'https://restcountries.com/v3.1/name/';

export function fetchCountries(name) {
    return fetch(`${LINK_COUNTRIES}${name}?fields=name,capital,population,flags,languages`)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.log(error);
    });
  };