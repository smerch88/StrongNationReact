import axios from 'axios';

export const post = axios.create({
  baseURL: 'http://strong-nation.online/post/v1/',
  timeout: 1000,
});

export const photo = axios.create({
  baseURL: 'http://strong-nation.online/post-photo/v1/',
  timeout: 1000,
});

export const getAllPostsByCountry = async () => {
  try {
    const { data } = await post.get('all/Ukraine');
    return data;
  } catch (error) {
    return error;
  }
};

export const getAllPostsByIdOfRegion = async id => {
  try {
    const { data } = await post.get(`all-by-region-id/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getAllPostsByNameOfRegion = async region => {
  try {
    const { data } = await post.get(`all/Ukraine/${region}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const addPostByNameOfRegion = async (region, body) => {
  try {
    const { data } = await post.post(`add/Ukraine/${region}`, body);
    return data;
  } catch (error) {
    return error;
  }
};

export const updatePostById = async body => {
  try {
    const { data } = await post.post('update', body);
    return data;
  } catch (error) {
    return error;
  }
};

export const addPhotoForPost = async (id, body) => {
  try {
    const { data } = await photo.post(`upload/${id}`, body);
    return data;
  } catch (error) {
    return error;
  }
};

export const getPhotoForPost = async id => {
  try {
    const { data } = await photo.post(`download/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};
