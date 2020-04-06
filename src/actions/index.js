import axios from 'axios';
import { types } from './types';

export const fetchPosts = () => async dispatch => {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
    dispatch({
      type: types.GET_POST,
      payload: data
    })
  } catch(error) {
    console.log(error)
  }
};