import axios from 'axios';

export const regions = axios.create({
  baseURL: 'http://strong-nation.online/api/v2/region/',
  // timeout: 1000,
});

export const getAllRegions = async () => {
  try {
    const { data } = await regions.get('all/Ukraine');
    return data;
  } catch (error) {
    return error;
  }
};

export const getRegionById = async id => {
  try {
    const { data } = await regions.get(`get-by-id/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getRegionByName = async region => {
  try {
    const { data } = await regions.get(`get/Ukraine/${region}`);
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
