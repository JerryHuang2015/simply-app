// import { fetchProductsBegin, fetchProductsSuccess, fetchProductsFailure } from '../actions/productActions'

// export function fetchProducts() {
//     return dispatch => {
//       dispatch(fetchProductsBegin());
//       return fetch("/products")
//         .then(handleErrors)
//         .then(res => res.json())
//         .then(json => {
//           dispatch(fetchProductsSuccess(json.products));
//           return json.products;
//         })
//         .catch(error => dispatch(fetchProductsFailure(error)));
//     };
//   }
  
//   // Handle HTTP errors since fetch won't.
//   function handleErrors(response) {
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     return response;
//   }