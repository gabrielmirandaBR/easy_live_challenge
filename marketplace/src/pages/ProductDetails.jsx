import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

import '../styles/ProductDetails.css';
import { useState } from 'react';
import { buyProduct } from '../redux/actions';
import ToastBox from '../components/ToastBox';

function ProductDetails({ itemDetails, setInShoppingCart }) {
	const [show, setShow] = useState(false);

	function handleClick() {
		setInShoppingCart(itemDetails);
		setShow(true);
	}

	return (
		<section className="details">
			<Card
				style={{
					borderRadius: '30px',
					backgroundColor: '#f8f9fa',
				}}
			>
				<Card.Img
					className="details__image"
					src={itemDetails.thumbnail}
					alt={itemDetails.title}
				/>
				<Card.Body>
					<Card.Title>{itemDetails.title}</Card.Title>
					<Card.Title className="details__price">
						R$ {itemDetails.price}
					</Card.Title>
					<Card.Text className="details__text">
						<img
							src="https://img.icons8.com/color/48/000000/star--v1.png"
							alt="star"
							width="35px"
						/>{' '}
						{itemDetails.sold_quantity} unidades vendidas
					</Card.Text>
					<Card.Text className="details__text">
						<img
							src="https://img.icons8.com/office/16/000000/worldwide-location.png"
							alt="location"
							width="30px"
						/>{' '}
						Localização: {itemDetails.address.city_name},{' '}
						{itemDetails.address.state_name}.
					</Card.Text>
					<Card.Text className="details__text">
						<img
							src="https://img.icons8.com/emoji/48/000000/sports-medal-emoji.png"
							alt="medal"
							width="30px"
						/>{' '}
						Vendido por:{' '}
						<a
							href={itemDetails.seller.permalink}
							rel="noreferrer"
							target="_blank"
						>
							Usuário Mercado Livre
						</a>
					</Card.Text>
					<Button type="button" onClick={() => handleClick()}>
						Compre Agora
					</Button>
				</Card.Body>
			</Card>

			<ToastBox show={show} setShow={setShow} />
		</section>
	);
}

const mapStateToProps = (state) => ({
	itemDetails: state.market.payload.productDetails,
});

const mapDispatchToProps = (dispatch) => ({
	setInShoppingCart: (item) => dispatch(buyProduct(item)),
});

ProductDetails.propTypes = {
	itemDetails: propTypes.shape({
		thumbnail: propTypes.string,
		title: propTypes.string,
		price: propTypes.number,
		sold_quantity: propTypes.number,
		address: propTypes.shape({
			city_name: propTypes.string,
			state_name: propTypes.string,
		}),
		seller: propTypes.shape({
			permalink: propTypes.string,
		}),
	}),
	setInShoppingCart: propTypes.func.isRequired,
};

ProductDetails.defaultProps = {
	itemDetails: {
		thumbnail: '',
		title: '',
		price: 0,
		sold_quantity: 0,
		address: {
			city_name: '',
			state_name: '',
		},
		seller: {
			permalink: '',
		},
	},
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
