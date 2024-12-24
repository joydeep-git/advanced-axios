import axiosInterceptor from './axiosInterceptor.js';

export const GetMethod = async (END_POINT) => {
  try {
    const response = await axiosInterceptor.get(END_POINT);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const PostMethod = async (END_POINT, data) => {
  try {
    const response = await axiosInterceptor.post(END_POINT, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const PutMethod = async (END_POINT, data) => {
  try {
    const response = await axiosInterceptor.put(END_POINT, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const DeleteMethod = async (END_POINT, data) => {
  try {
    const response = await axiosInterceptor.delete(END_POINT);
    return response.data;
  } catch (error) {
    throw error;
  }
};
