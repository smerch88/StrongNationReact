import axios from 'axios';

const starwars = axios.create({
  baseURL: 'https://swapi.py4e.com/api/',
  timeout: 1000,
});
export const regions = axios.create({
  baseURL: 'https://63e02a7f8b24964ae0fa52df.mockapi.io/Regions',
  timeout: 1000,
});

export const fetchStarWarsCharacter = async peopleName => {
  try {
    const { data } = await starwars.get(`people/?search=${peopleName}`);
    return data;
  } catch (error) {
    return error.message;
  }
};
