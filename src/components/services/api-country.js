import axios from 'axios';

export const country = axios.create({
  baseURL: 'https://strong-nation.online/api/v2/country/',
  timeout: 3000,
});

export const getCountry = async () => {
  try {
    const { data } = await country.get('get/Ukraine');
    return data;
  } catch (error) {
    return error;
  }
};
