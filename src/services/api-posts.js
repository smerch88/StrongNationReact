import axios from 'axios';

export const post = axios.create({
  baseURL: 'https://strong-nation.online/api/v2/post/',
});

export const postGET = axios.create({
  baseURL: 'https://strong-nation.online/api/v2/post/',
});

export const photo = axios.create({
  baseURL: 'https://strong-nation.online/api/v2/post-photo/',
  timeout: 30000,
});

export const getAllPostsByCountry = async () => {
  try {
    const { data } = await postGET.get('all/Ukraine');

    return data;
  } catch (error) {
    return error;
  }
};

export const getAllPostsByIdOfRegion = async id => {
  try {
    const { data } = await postGET.get(`all-by-region-id/${id}`);

    return data;
  } catch (error) {
    return error;
  }
};

export const getAllPostsByNameOfRegion = async region => {
  try {
    const { data } = await postGET.get(`all/Ukraine/${region}`);

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

export const getPostById = async id => {
  try {
    const { data } = await postGET.get(`get-by-post-id/${id}`);

    return data;
  } catch (error) {
    return error;
  }
};

export const updatePostById = async body => {
  try {
    const { data } = await post.put('update', body);

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

export const deletePostById = async id => {
  try {
    const { data } = await post.delete(`delete/${id}`);

    return data;
  } catch (error) {
    return error;
  }
};

export const addImportant = async id => {
  try {
    const { data } = await post.put(`/update/important/${id}/true`);

    return data;
  } catch (error) {
    return error;
  }
};

export const deleteImportant = async id => {
  try {
    const { data } = await post.put(`/update/important/${id}/false`);

    return data;
  } catch (error) {
    return error;
  }
};
