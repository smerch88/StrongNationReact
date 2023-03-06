import axios from 'axios';

export const regions = axios.create({
  baseURL: 'https://strong-nation.online/api/v2/region/',
});

export const regionsGet = axios.create({
  baseURL: 'https://strong-nation.online/api/v2/region/',
});

export const getAllRegions = async () => {
  try {
    const { data } = await regionsGet.get('all/Ukraine');
    return data;
  } catch (error) {
    return error;
  }
};

export const getRegionById = async id => {
  try {
    const { data } = await regionsGet.get(`get-by-id/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getRegionByName = async region => {
  try {
    const { data } = await regionsGet.get(`get/Ukraine/${region}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const addNewRegion = async region => {
  try {
    const { data } = await regions.post(`add/Ukraine/${region}`);
    return data;
  } catch (error) {
    return error;
  }
};
