import axios from 'axios';

const baseUrl =
  'https://crudcrud.com/api/25d5544f267c48899fd6faded4e828c2/cart';

export const getUserCart = async (userEmail) => {
  try {
    const { data } = await axios.get(`${baseUrl}${userEmail}`);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const addToCart = async (userEmail, item) => {
  try {
    const { data } = await axios.post(`${baseUrl}${userEmail}`, item);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteFromCart = async (userEmail, _id) => {
  try {
    const { data } = await axios.delete(`${baseUrl}${userEmail}/${_id}`);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const orderFromCart = async (userEmail, items) => {
  try {
    items.forEach(async (item) => {
      await axios.delete(`${baseUrl}${userEmail}/${item._id}`);
    });

    return 'Order Successful!';
  } catch (error) {
    console.log(error.message);
  }
};
