const PRODUCTS_LIST = 'https://api.mercadolibre.com/sites/MLB/search?q='

export async function getComputerProducts() {
  const request = await fetch(`${PRODUCTS_LIST}computer`);
  const response = request.json();
  return response;
}

export async function getFilteredProducts(product) {
  const request = await fetch(`${PRODUCTS_LIST}${product}`)
  const response = request.json();
  return response;
}
