/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import {
	REQUEST_PRODUCTS,
	REQUEST_PRODUCTS_ERROR,
	REQUEST_PRODUCTS_SUCCESS,
	REQUEST_FILTERED_PRODUCTS_SUCCESS,
	GET_PRODUCTS_DETAILS,
	REQUEST_CATEGORIES_SUCCESS,
	REQUEST_CATEGORIES,
	REQUEST_CATEGORIES_ERROR,
	BUY_PRODUCT,
	REMOVE_PRODUCT,
} from '../actions';

const INITIAL_MARKET_STATE = {
	payload: {
		products: [],
		filteredProducts: [],
		productDetails: {},
		productsInShoppingCart: [],
	},
	error: null,
	isFetching: false,
	quantity: 1,
};

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
					filteredProducts: action.data.results,
				},
				isFetching: false,
			};

		case GET_PRODUCTS_DETAILS:
			return {
				...state,
				payload: {
					...state.payload,
					productDetails: action.item,
				},
			};

		case REQUEST_CATEGORIES:
			return {
				...state,
				isFetching: true,
			};

		case REQUEST_CATEGORIES_SUCCESS:
			return {
				...state,
				payload: {
					...state.payload,
					productsCategories: action.data,
				},
				isFetching: false,
			};

		case REQUEST_CATEGORIES_ERROR:
			return {
				...state,
				error: action.error,
				isFetching: false,
			};

		case BUY_PRODUCT:
			return {
				...state,
				payload: {
					...state.payload,
					productsInShoppingCart: [
						...state.payload.productsInShoppingCart,
						action.item,
					],
				},
			};

		case REMOVE_PRODUCT:
			return {
				...state,
				payload: {
					...state.payload,
					productsInShoppingCart: state.payload.productsInShoppingCart.filter(
						(_product, index) => index !== action.id
					),
				},
			};

		default:
			return state;
	}
}

export default marketReducer;
