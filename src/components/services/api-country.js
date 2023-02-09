import axios from 'axios';

export const country = axios.create({
  baseURL: 'http://strong-nation.online/country/v1/',
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
