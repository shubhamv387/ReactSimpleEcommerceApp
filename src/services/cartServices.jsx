import axios from 'axios';

const baseUrl =
  'https://crudcrud.com/api/eee8c322d9bf4167b0d8d31a78d730f8/cart';

export const getUserCart = async (userEmail) => {
  return axios.get(`${baseUrl}${userEmail}`);
};

export const addToCart = async (userEmail, item) => {
  return axios.post(`${baseUrl}${userEmail}`, item);
};

export const deleteFromCart = async (userEmail, _id) => {
  return axios.delete(`${baseUrl}${userEmail}/${_id}`);
};
