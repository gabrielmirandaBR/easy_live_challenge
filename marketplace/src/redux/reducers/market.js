import { 
  REQUEST_PRODUCTS, 
  REQUEST_PRODUCTS_ERROR,
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_FILTERED_PRODUCTS_SUCCESS,
  GET_PRODUCTS_DETAILS,
 } from "../actions";

const INITIAL_MARKET_STATE = {
  payload: {
    products: [],
    filteredProducts: [],
    productDetails: {}
  },
  error: null,
  isFetching: false,
}

function marketReducer(state = INITIAL_MARKET_STATE, action) {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return {
        ...state,
        isFetching: true,
      };

    case REQUEST_PRODUCTS_SUCCESS:
      return {
        ...state,
        payload: {
          ...state.payload,
          products: action.data.results,
        },
        isFetching: false,
      };

    case REQUEST_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };

    case REQUEST_FILTERED_PRODUCTS_SUCCESS: 
      return {
        ...state,
        payload: {
          ...state.payload,
          filteredProducts: action.data.results
        },
        isFetching: false,
      }

    case GET_PRODUCTS_DETAILS: 
      return {
        ...state,
        payload: {
          ...state.payload,
          productDetails: action.item
        }
      }

    default:
      return state;
  }
}

export default marketReducer;