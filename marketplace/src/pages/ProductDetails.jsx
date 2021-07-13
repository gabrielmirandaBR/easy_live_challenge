/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import { connect } from 'react-redux';
import propTypes from 'prop-types';

function ProductDetails({ itemDetails }) {
	return <p>{itemDetails.id}</p>;
}

const mapStateToProps = (state) => ({
	itemDetails: state.market.payload.productDetails,
});

ProductDetails.propTypes = {
	itemDetails: propTypes.shape({}),
};

export default connect(mapStateToProps)(ProductDetails);
