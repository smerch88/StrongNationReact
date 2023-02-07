import axios from 'axios';

export const regions = axios.create({
  baseURL: 'https://63e02a7f8b24964ae0fa52df.mockapi.io/Regions',
  timeout: 1000,
});

export const backend = axios.create({
  baseURL: 'https://63e02a7f8b24964ae0fa52df.mockapi.io/Regions',
  timeout: 1000,
});
