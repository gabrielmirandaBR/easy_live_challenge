import { REQUEST_PRODUCTS, REQUEST_PRODUCTS_ERROR, REQUEST_PRODUCTS_SUCCESS } from "../actions";

const INITIAL_MARKET_STATE = {
  payload: {
    products: []
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

    default:
      return state;
  }
}

export default marketReducer;