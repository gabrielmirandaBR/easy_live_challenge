import { Button, Navbar } from 'react-bootstrap';
import propTypes from 'prop-types';

import '../styles/ListCategories.css';
import { connect } from 'react-redux';
import { fetchFilteredProducts } from '../redux/actions';

function ListCategories({ categories, fetchFilteredItems }) {
	const NUMBER_OF_CATEGORIES = 12;

	function handleClick(category) {
		fetchFilteredItems(category);
	}

	return (
		<section className="categories">
			<Navbar bg="light">
				<Button
					onClick={({ target: { name } }) => handleClick(name)}
					type="button"
					variant="light"
					id="categories__button"
				>
					Computador
				</Button>

				{categories.slice(0, NUMBER_OF_CATEGORIES).map((category) => (
					<Button
						key={category.id}
						onClick={({ target: { name } }) => handleClick(name)}
						name={category.name}
						type="button"
						variant="light"
						id="categories__button"
					>
						{category.name}
					</Button>
				))}
			</Navbar>
		</section>
	);
}

const mapDispatchToProps = (dispatch) => ({
	fetchFilteredItems: (product) => dispatch(fetchFilteredProducts(product)),
});

ListCategories.propTypes = {
	categories: propTypes.arrayOf(propTypes.object),
	fetchFilteredItems: propTypes.func.isRequired,
};

ListCategories.defaultProps = {
	categories: [],
};
export default connect(null, mapDispatchToProps)(ListCategories);
