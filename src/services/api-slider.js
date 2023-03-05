import axios from 'axios';
import { logOutAdminRequest } from 'redux/admin/admin-operations';

export const sliderImages = axios.create({
  baseURL: 'https://strong-nation.online/api/v2/slider-photo/',
});

export const sliderPubImages = axios.create({
  baseURL: 'https://strong-nation.online/api/v2/slider-photo/',
});

export const getAllSliderId = async () => {
  try {
    const { data } = await sliderPubImages.get('all-id');
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteSliderImage = async id => {
  try {
    const { data } = await sliderImages.delete(`delete/${id}`);
    return data;
  } catch (error) {
    if(error.response.data.debugMessage.startsWith("Token is not valid.")){logOutAdminRequest()}
    return error;
  }
};

export const uploadSliderImage = async body => {
  try {
    const { data } = await sliderImages.post(`upload`, body);
    return data;
  } catch (error) {
    if(error.response.data.debugMessage.startsWith("Token is not valid.")){logOutAdminRequest()}
    return error;
  }
};
