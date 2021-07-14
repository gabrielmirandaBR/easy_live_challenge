import { useEffect } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Button, Card, ListGroup } from 'react-bootstrap';
import Header from '../components/Header';

import '../styles/ShoppingCart.css';
import { deleteProduct, increasesQuantityProducts } from '../redux/actions';

function ShoppingCart({
	itemsInShoppingCart,
	removeProduct,
	encreasesQuantity,
}) {
	function sumTotalValue() {
		const totalValue = itemsInShoppingCart.reduce(
			(acc, currentValue) => Number(acc) + Number(currentValue.price),
			[0]
		);

		return Number(totalValue).toFixed(2);
	}

	useEffect(() => {
		sumTotalValue();
	}, [itemsInShoppingCart]);

	return (
		<section className="shopping">
			<Header />
			<Card className="shopping__card">
				<Card.Header>
					<p className="card__quantity">
						Itens no carrinho: {itemsInShoppingCart.length}
					</p>
					<p className="card__total">Total: {sumTotalValue()}</p>
				</Card.Header>
				<ListGroup variant="flush">
					{itemsInShoppingCart.map((item, index) => (
						<ListGroup.Item key={item.id} className="item">
							<img
								src={item.thumbnail}
								alt={item.title}
								width="70px"
								height="70px"
							/>
							<p className="card__title">{item.title}</p>
							<div className="card__buttons">
								<p>Quantidade: 1</p>

								<Button
									type="button"
									style={{ backgroundColor: 'transparent', border: 'none' }}
									onClick={() => encreasesQuantity(item)}
								>
									<img
										src="https://img.icons8.com/color/48/000000/plus.png"
										alt="trash"
										width="25px"
									/>
								</Button>

								<Button
									type="button"
									style={{ backgroundColor: 'transparent', border: 'none' }}
									onClick={() => removeProduct(index)}
								>
									<img
										src="https://img.icons8.com/fluent/48/000000/minus.png"
										alt="trash"
										width="25px"
									/>
								</Button>
							</div>
							<p className="card__price">R$ {item.price.toFixed(2)}</p>
						</ListGroup.Item>
					))}
				</ListGroup>
			</Card>
		</section>
	);
}

const mapStateToProps = (state) => ({
	itemsInShoppingCart: state.market.payload.productsInShoppingCart,
});

const mapDispatchToProps = (dispatch) => ({
	removeProduct: (index) => dispatch(deleteProduct(index)),
	encreasesQuantity: (item) => dispatch(increasesQuantityProducts(item)),
});

ShoppingCart.propTypes = {
	itemsInShoppingCart: propTypes.arrayOf(propTypes.object),
	removeProduct: propTypes.func.isRequired,
	encreasesQuantity: propTypes.func.isRequired,
};

ShoppingCart.defaultProps = {
	itemsInShoppingCart: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
