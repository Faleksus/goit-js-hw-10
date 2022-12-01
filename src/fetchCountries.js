const LINK_COUNTRIES = 'https://restcountries.com/v3.1/name/';

export async function fetchCountries(name) {
  try {
        const response = await fetch(`${LINK_COUNTRIES}${name}?fields=name,capital,population,flags,languages`);
        return await response.json();
    } catch (error) {
        return console.log(error);
    }
}