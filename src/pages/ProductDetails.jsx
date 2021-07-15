import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { useState } from 'react';
import { buyProduct } from '../redux/actions';
import ToastBox from '../components/ToastBox';
import Header from '../components/Header';
import ItemDetails from '../components/ItemDetails';
import Avaliations from '../components/Avaliations';

function ProductDetails({ itemDetails, setInShoppingCart }) {
	const [show, setShow] = useState(false);

	function handleClick() {
		setInShoppingCart(itemDetails);
		setShow(true);
	}

	return (
		<section>
			<Header />
			<ItemDetails itemDetails={itemDetails} handleClick={handleClick} />
			<ToastBox show={show} setShow={setShow} />
			<Avaliations />
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
	itemDetails: propTypes.shape().isRequired,
	setInShoppingCart: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
