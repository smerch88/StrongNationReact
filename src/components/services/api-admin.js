import axios from 'axios';

export const adminApi = axios.create({
  baseURL: 'http://strong-nation.online/api/v2/auth/authenticate',
});

export const setAuthHeader = token => {
  adminApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  adminApi.defaults.headers.common.Authorization = '';
};

export const loginAdmin = async formData => {
  try {
    const { data } = await adminApi.post(formData);
    return data;
  } catch (error) {
    return error;
  }
};

export const adminLogOut = async () => {
  try {
    const { data } = await adminApi.post();
    return data;
  } catch (error) {
    return error;
  }
};
