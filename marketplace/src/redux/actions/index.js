import {getComputerProducts}from "../../services/MLAPI";

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const REQUEST_PRODUCTS_SUCCESS = 'REQUEST_PRODUCTS_SUCCESS';
export const REQUEST_PRODUCTS_ERROR = 'REQUEST_PRODUCTS_ERROR';

export function requestProducts() {
  return {
    type: REQUEST_PRODUCTS,
  };
};

export function requestProductsSuccess(data) {
  return {
    type: REQUEST_PRODUCTS_SUCCESS,
    data,
  };
};

export function requestProductsError(error) {
  return {
    type: REQUEST_PRODUCTS_ERROR,
    error,
  };
}; 

export function fetchProducts() {
  return async (dispatch) => {
    try {
      dispatch(requestProducts()); // isFetching is true
      const data = await getComputerProducts();
      dispatch(requestProductsSuccess(data)); // altera estado products
    } catch (error) {
      dispatch(requestProductsError(error)) // altera estado products
    }
  }
}