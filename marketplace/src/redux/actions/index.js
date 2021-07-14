import {
	getCategoriesProducts,
	getComputerProducts,
	getFilteredProducts,
} from '../../services/MLAPI';

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const REQUEST_PRODUCTS_SUCCESS = 'REQUEST_PRODUCTS_SUCCESS';
export const REQUEST_PRODUCTS_ERROR = 'REQUEST_PRODUCTS_ERROR';
export const REQUEST_FILTERED_PRODUCTS_SUCCESS =
	'REQUEST_FILTERED_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_DETAILS = 'GET_PRODUCTS_DETAILS';
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const REQUEST_CATEGORIES_SUCCESS = 'REQUEST_CATEGORIES_SUCCESS';
export const REQUEST_CATEGORIES_ERROR = 'REQUEST_CATEGORIES_ERROR';
export const BUY_PRODUCT = 'BUY_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export function requestProducts() {
	return {
		type: REQUEST_PRODUCTS,
	};
}

export function requestProductsSuccess(data) {
	return {
		type: REQUEST_PRODUCTS_SUCCESS,
		data,
	};
}

export function requestProductsError(error) {
	return {
		type: REQUEST_PRODUCTS_ERROR,
		error,
	};
}

export function requestProductsFilteredSuccess(data) {
	return {
		type: REQUEST_FILTERED_PRODUCTS_SUCCESS,
		data,
	};
}

export function getProductDetails(item) {
	return {
		type: GET_PRODUCTS_DETAILS,
		item,
	};
}

export function requestCategories() {
	return {
		type: REQUEST_CATEGORIES,
	};
}

export function requestCategoriesSuccess(data) {
	return {
		type: REQUEST_CATEGORIES_SUCCESS,
		data,
	};
}

export function requestCategoriesError(error) {
	return {
		type: REQUEST_CATEGORIES_ERROR,
		error,
	};
}

export function buyProduct(item) {
	return {
		type: BUY_PRODUCT,
		item,
	};
}

export function deleteProduct(id) {
	return {
		type: REMOVE_PRODUCT,
		id,
	};
}

export function increasesQuantityProducts(item) {
	return {
		type: BUY_PRODUCT,
		item,
	};
}

export function fetchProducts() {
	return async (dispatch) => {
		try {
			dispatch(requestProducts()); // isFetching is true
			const data = await getComputerProducts();
			dispatch(requestProductsSuccess(data)); // altera estado products
		} catch (error) {
			dispatch(requestProductsError(error)); // altera estado products
		}
	};
}

export function fetchFilteredProducts(product) {
	return async (dispatch) => {
		try {
			dispatch(requestProducts()); // isFetching is true
			const data = await getFilteredProducts(product);
			dispatch(requestProductsFilteredSuccess(data));
		} catch (error) {
			dispatch(requestProductsError(error));
		}
	};
}

export function fetchCategoriesProducts() {
	return async (dispatch) => {
		try {
			dispatch(requestCategories());
			const data = await getCategoriesProducts();
			dispatch(requestCategoriesSuccess(data));
		} catch (error) {
			dispatch(requestCategoriesError(error));
		}
	};
}
