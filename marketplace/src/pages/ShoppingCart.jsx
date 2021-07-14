import { useEffect } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Button, Card, ListGroup } from 'react-bootstrap';
import Header from '../components/Header';

import '../styles/ShoppingCart.css';
import { deleteProduct } from '../redux/actions';

function ShoppingCart({ itemsInShoppingCart, removeProduct }) {
	function sumTotalValue() {
		const totalValue = itemsInShoppingCart.reduce(
			(acc, currentValue) => Number(acc) + Number(currentValue.price),
			[0]
		);

		return Number(totalValue).toFixed(2);
	}

	function handleClick(index) {
		removeProduct(index);
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
					{itemsInShoppingCart.map((item, index) => {
						if(item.id === itemsInShoppingCart[index].id) {
              console.log(itemsInShoppingCart.length)
            }
						return (
							<ListGroup.Item key={item.id}>
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
										onClick={() => handleClick(index)}
									>
										<img
											src="https://img.icons8.com/fluent/48/000000/delete-sign.png"
											alt="trash"
											width="25px"
										/>
									</Button>
								</div>
								<p className="card__price">R$ {item.price.toFixed(2)}</p>
							</ListGroup.Item>
						);
					})}
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
});

ShoppingCart.propTypes = {
	itemsInShoppingCart: propTypes.arrayOf(propTypes.object),
	removeProduct: propTypes.func.isRequired,
};

ShoppingCart.defaultProps = {
	itemsInShoppingCart: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
