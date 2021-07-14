const PRODUCTS_LIST = 'https://api.mercadolibre.com/sites/MLB/search?q=';
const CATEGORIES_LIST = 'https://api.mercadolibre.com/sites/MLB/categories';

export async function getComputerProducts() {
	const request = await fetch(`${PRODUCTS_LIST}computer`);
	const response = await request.json();
	return response;
}

export async function getFilteredProducts(product) {
	const request = await fetch(`${PRODUCTS_LIST}${product}`);
	const response = await request.json();
	return response;
}

export async function getCategoriesProducts() {
	const request = await fetch(CATEGORIES_LIST);
	const response = await request.json();
	return response;
}
