import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

import '../styles/ProductDetails.css';
import { buyProduct } from '../redux/actions';


function ProductDetails({ itemDetails, setInShoppingCart  }) {

	function handleClick() {
		setInShoppingCart(itemDetails)
	}

	return (
		<section className="details">
			<Card
				style={{
					borderRadius: '30px',
					backgroundColor: '#f8f9fa',
				}}>
				<Card.Img 
					className="details__image"
					src={itemDetails.thumbnail} 
					alt={itemDetails.title} 
				/>
				<Card.Body>
					<Card.Title>
						{itemDetails.title}
					</Card.Title>
					<Card.Title className="details__price">
						R$ {itemDetails.price.toFixed(2)}
					</Card.Title>
					<Card.Text className="details__text">
						<img src="https://img.icons8.com/color/48/000000/star--v1.png" alt="star" width="35px"/>
						{' '}
						{itemDetails.sold_quantity} unidades vendidas
					</Card.Text>
					<Card.Text className="details__text">
						<img src="https://img.icons8.com/office/16/000000/worldwide-location.png" alt="location" width="30px"/>
						{' '}
						Localização: {itemDetails.address.city_name}, {itemDetails.address.state_name}.
					</Card.Text>
					<Card.Text className="details__text">
						<img src="https://img.icons8.com/emoji/48/000000/sports-medal-emoji.png" alt="medal" width="30px"/>
						{' '}
						Vendido por: <a href={itemDetails.seller.permalink} rel="noreferrer" target="_blank">Usuário Mercado Livre</a>
					</Card.Text>
					<Button
						type="button"
						onClick={() => handleClick()}
					>
						Compre Agora
					</Button>
				</Card.Body>
			</Card>
		</section>
	)
}

const mapStateToProps = (state) => ({
	itemDetails: state.market.payload.productDetails,
});

const mapDispatchToProps = (dispatch) => ({
	setInShoppingCart: (item) => dispatch(buyProduct(item))
})

ProductDetails.propTypes = {
	itemDetails: propTypes.shape({
		thumbnail: propTypes.string.isRequired,
		title: propTypes.string.isRequired,
		price: propTypes.number.isRequired,
		sold_quantity: propTypes.number.isRequired,
		address: propTypes.shape({
			city_name: propTypes.string.isRequired,
			state_name: propTypes.string.isRequired,
		}),
		seller: propTypes.shape({
			permalink: propTypes.string.isRequired,
		})
	}).isRequired,
	setInShoppingCart: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
