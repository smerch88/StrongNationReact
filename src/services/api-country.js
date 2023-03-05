import axios from 'axios';

export const country = axios.create({
  baseURL: 'https://strong-nation.online/api/v2/country/',
  timeout: 3000,
});

export const getCountry = async () => {
  try {
    const { data, status } = await country.get('get/Ukraine');
    if (status !== 200) {
      throw new Error(`Failed to fetch: ${status}`);
    }
    return data;
  } catch (error) {
    return error;
  }
};
