import { Button, Card } from 'react-bootstrap';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/ItemDetails.css';

function ItemDetails({ itemDetails, handleClick }) {
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
          <div className="details__seller">
            <Card.Text className="details__text">
              <img
                src="https://img.icons8.com/color/48/000000/star--v1.png"
                alt="star"
                width="35px"
              />
              {itemDetails.sold_quantity} unidades vendidas
            </Card.Text>
            <Card.Text className="details__text">
              <img
                src="https://img.icons8.com/office/16/000000/worldwide-location.png"
                alt="location"
                width="30px"
              />
              Localização: {itemDetails.address.city_name},{' '}
              {itemDetails.address.state_name}.
            </Card.Text>
            <Card.Text className="details__text">
              <img
                src="https://img.icons8.com/emoji/48/000000/sports-medal-emoji.png"
                alt="medal"
                width="30px"
              />
              Vendido por: {' '}
              <a
                href={itemDetails.seller.permalink}
                rel="noreferrer"
                target="_blank"
              >
                Usuário Mercado Livre
              </a>
            </Card.Text>
          </div>
          <div className="details__buttons">
            <Link to="/shopping_cart">
              <img src="https://img.icons8.com/ios/50/000000/shopping-cart.png" alt="shopping cart" width="50px"/>
            </Link>
            <Button type="button" onClick={() => handleClick()}>
              Compre Agora
            </Button>
          </div>
				</Card.Body>
			</Card>
		</section>
	);
}

ItemDetails.propTypes = {
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
		}),
	}).isRequired,
	handleClick: propTypes.func.isRequired,
};

/* ItemDetails.defaultProps = {
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
}; */

export default ItemDetails;
