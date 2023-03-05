import axios from 'axios';

export const post = axios.create({
  baseURL: 'https://strong-nation.online/api/v2/post/',
  // timeout: 1000,
});

export const postGET = axios.create({
  baseURL: 'https://strong-nation.online/api/v2/post/',
  // timeout: 1000,
});

export const photo = axios.create({
  baseURL: 'https://strong-nation.online/api/v2/post-photo/',
  timeout: 30000,
});

export const getAllPostsByCountry = async () => {
  try {
    const { data, status } = await postGET.get('all/Ukraine');
    if (status !== 200) {
      throw new Error(`Failed to fetch: ${status}`);
    }
    return data;
  } catch (error) {
    return error;
  }
};

export const getAllPostsByIdOfRegion = async id => {
  try {
    const { data, status } = await postGET.get(`all-by-region-id/${id}`);
    if (status !== 200) {
      throw new Error(`Failed to fetch: ${status}`);
    }
    return data;
  } catch (error) {
    return error;
  }
};

export const getAllPostsByNameOfRegion = async region => {
  try {
    const { data, status } = await postGET.get(`all/Ukraine/${region}`);
    if (status !== 200) {
      throw new Error(`Failed to fetch: ${status}`);
    }
    return data;
  } catch (error) {
    return error;
  }
};

export const addPostByNameOfRegion = async (region, body) => {
  try {
    const { data, status } = await post.post(`add/Ukraine/${region}`, body);
    if (status !== 200) {
      throw new Error(`Failed to fetch: ${status}`);
    }
    return data;
  } catch (error) {
    return error;
  }
};

export const getPostById = async id => {
  try {
    const { data, status } = await postGET.get(`get-by-post-id/${id}`);
    if (status !== 200) {
      throw new Error(`Failed to fetch: ${status}`);
    }
    return data;
  } catch (error) {
    return error;
  }
};

export const updatePostById = async body => {
  try {
    const { data, status } = await post.put('update', body);
    if (status !== 200) {
      throw new Error(`Failed to fetch: ${status}`);
    }
    return data;
  } catch (error) {
    return error;
  }
};

export const addPhotoForPost = async (id, body) => {
  try {
    const { data, status } = await photo.post(`upload/${id}`, body);
    if (status !== 200) {
      throw new Error(`Failed to fetch: ${status}`);
    }
    return data;
  } catch (error) {
    return error;
  }
};

export const deletePostById = async id => {
  try {
    const { data, status } = await post.delete(`delete/${id}`);
    if (status !== 200) {
      throw new Error(`Failed to fetch: ${status}`);
    }
    return data;
  } catch (error) {
    return error;
  }
};

export const addImportant = async id => {
  try {
    const { data, status } = await post.put(`/update/important/${id}/true`);
    if (status !== 200) {
      throw new Error(`Failed to fetch: ${status}`);
    }
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteImportant = async id => {
  try {
    const { data, status } = await post.put(`/update/important/${id}/false`);
    if (status !== 200) {
      throw new Error(`Failed to fetch: ${status}`);
    }
    return data;
  } catch (error) {
    return error;
  }
};
