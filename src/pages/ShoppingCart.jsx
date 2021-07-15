import { useEffect } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Card, ListGroup } from 'react-bootstrap';
import Header from '../components/Header';
import ButtonToTop from '../components/ButtonToTop';
import ProductInShoppingCart from '../components/ProductInShoppingCart';

import '../styles/ShoppingCart.css';

function ShoppingCart({ itemsInShoppingCart }) {
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
						<ProductInShoppingCart key={item.id} item={item} index={index} />
					))}
				</ListGroup>
			</Card>
			<ButtonToTop />
		</section>
	);
}

const mapStateToProps = (state) => ({
	itemsInShoppingCart: state.market.payload.productsInShoppingCart,
});

ShoppingCart.propTypes = {
	itemsInShoppingCart: propTypes.arrayOf(propTypes.object),
};

ShoppingCart.defaultProps = {
	itemsInShoppingCart: [],
};

export default connect(mapStateToProps)(ShoppingCart);
