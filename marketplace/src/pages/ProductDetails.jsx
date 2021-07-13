/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

import '../styles/ProductDetails.css';


function ProductDetails({ itemDetails }) {
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
					<Card.Text>
						{itemDetails.sold_quantity} unidades vendidas
					</Card.Text>
					<Card.Text>
						Localização: {itemDetails.address.city_name}, {itemDetails.address.state_name}.
					</Card.Text>
					<Card.Text>
						Vendido por: <a href={itemDetails.seller.permalink} rel="noreferrer" target="_blank">Usuário Mercado Livre</a>
					</Card.Text>
					<Button>
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

ProductDetails.propTypes = {
	itemDetails: propTypes.shape({}),
};

export default connect(mapStateToProps)(ProductDetails);
