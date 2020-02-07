import * as types from '../actions/actionTypes'


const initialState =  {status:false, products:[], error: null}

export default function productsReducer (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        status:true, 
        products:action.payload, 
        error: ''
      }
    default:
      return state
  }
}
