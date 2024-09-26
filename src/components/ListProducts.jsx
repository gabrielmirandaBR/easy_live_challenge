import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Product from './Product';

import '../styles/ListProducts.css';
import ButtonToTop from './ButtonToTop';
import { Spinner } from 'react-bootstrap';

function ListProducts({ items, itemsFiltered, isFetching }) {
	return !isFetching ? (
		<section>
			<section className="cards">
				{itemsFiltered.length === 0
					? items.map((item) => <Product key={item.id} item={item} />)
					: itemsFiltered.map((item) => <Product key={item.id} item={item} />)}
			</section>
			<ButtonToTop />
		</section>
	) : (
		<Spinner
			animation="border"
			variant="primary"
			style={{ display: 'flex', margin: 'auto' }}
		/>
	);
}

const mapStateToProps = (state) => ({
	items: state.market.payload.products,
	itemsFiltered: state.market.payload.filteredProducts,
	isFetching: state.market.isFetching,
});

ListProducts.propTypes = {
	items: propTypes.arrayOf(propTypes.object).isRequired,
	itemsFiltered: propTypes.arrayOf(propTypes.object).isRequired,
	isFetching: propTypes.bool.isRequired,
};

export default connect(mapStateToProps)(ListProducts);
