const COMPUTER_PRODUCTS = 'https://api.mercadolibre.com/sites/MLB/search?q=computer%20G6'

async function getComputerProducts() {
  const request = await fetch(COMPUTER_PRODUCTS);
  const response = request.json();
  return response;
}

export default getComputerProducts;