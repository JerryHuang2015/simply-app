import axios from 'axios';
import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE 
} from './actionTypes';

axios.defaults.baseURL = 'http://127.0.0.1:3333';

export const initProducts = () => dispatch =>{
  dispatch({type:FETCH_PRODUCTS_BEGIN})
  axios({
    method: 'get',
    url: '/api/products',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if(res.status === 400 || res.status === 403){
      dispatch({type:FETCH_PRODUCTS_FAILURE})
    }
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res.data});
  })
  .catch(err => {
    dispatch({type:FETCH_PRODUCTS_FAILURE})
  })
}


