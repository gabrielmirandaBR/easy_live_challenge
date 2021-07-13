import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import propTypes from 'prop-types';

import '../styles/Product.css';
import { connect } from 'react-redux';
import { getProductDetails } from '../redux/actions';

function Product({ item, getItemDetails }) {
	const history = useHistory();

	function handleClick() {
		history.push(`/product/${item.id}`);
		getItemDetails(item);
	}

	return (
		<Button
			variant="light"
			style={{ backgroundColor: 'transparent', border: 'none' }}
			onClick={() => handleClick()}
		>
			<Card
				className="product__card"
				style={{
					borderRadius: '15px',
					backgroundColor: '#f8f9fa',
				}}
			>
				<Card.Img
					className="product__image"
					style={{width:"150px", height:'150px'}}
					variant="top"
					src={item.thumbnail}
					alt={item.title}
				/>
				<Card.Body>
					<Card.Title
						className="product__title"
						style={{ fontSize: '1rem', textAlign: 'center' }}
					>
						{item.title}
					</Card.Title>
					<Card.Text className="product__price">
						R$ {item.price.toFixed(2)}
					</Card.Text>
				</Card.Body>
			</Card>
		</Button>
	);
}

const mapDispatchToProps = (dispatch) => ({
	getItemDetails: (item) => dispatch(getProductDetails(item)),
});

Product.propTypes = {
	item: propTypes.shape({
		id: propTypes.string.isRequired,
		thumbnail: propTypes.string.isRequired,
		title: propTypes.string.isRequired,
		price: propTypes.number.isRequired,
	}).isRequired,
	getItemDetails: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Product);
