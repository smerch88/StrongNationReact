import axios from 'axios';

import { regions } from './api';
import { photo, post } from './api-posts';
import { sliderImages } from './api-slider';

export const adminApi = axios.create({
  baseURL: 'https://strong-nation.online/api/v2/auth/authenticate',
});

export const setAuthHeader = token => {
  adminApi.defaults.headers.common.Authorization = `Bearer ${token}`;
  post.defaults.headers.common.Authorization = `Bearer ${token}`;
  photo.defaults.headers.common.Authorization = `Bearer ${token}`;
  regions.defaults.headers.common.Authorization = `Bearer ${token}`;
  sliderImages.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  adminApi.defaults.headers.common.Authorization = '';
  post.defaults.headers.common.Authorization = '';
  photo.defaults.headers.common.Authorization = '';
  regions.defaults.headers.common.Authorization = '';
};

export const loginAdmin = async formData => {
  try {
    const { data, status } = await adminApi.post('', formData);
    if (status !== 200) {
      throw new Error(`Failed to fetch: ${status}`);
    }
    return data;
  } catch (error) {
    return error;
  }
};

export const adminLogOut = async () => {
  try {
    const { data, status } = await adminApi.post();
    if (status !== 200) {
      throw new Error(`Failed to fetch: ${status}`);
    }
    return data;
  } catch (error) {
    return error;
  }
};
