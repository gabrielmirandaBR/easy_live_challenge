import { Button, ListGroup } from 'react-bootstrap';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteProduct, increasesQuantityProducts } from '../redux/actions';

function ProductsInShoppingCart({
	item,
	index,
	encreasesQuantity,
	removeProduct,
}) {
	return (
		<ListGroup.Item key={item.id} className="item">
			<img src={item.thumbnail} alt={item.title} width="70px" height="70px" />
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
	);
}

const mapDispatchToProps = (dispatch) => ({
	removeProduct: (index) => dispatch(deleteProduct(index)),
	encreasesQuantity: (item) => dispatch(increasesQuantityProducts(item)),
});

ProductsInShoppingCart.propTypes = {
	item: propTypes.shape({
		thumbnail: propTypes.string.isRequired,
		title: propTypes.string.isRequired,
		id: propTypes.string.isRequired,
		price: propTypes.number.isRequired,
	}).isRequired,
	index: propTypes.number.isRequired,
	removeProduct: propTypes.func.isRequired,
	encreasesQuantity: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ProductsInShoppingCart);
