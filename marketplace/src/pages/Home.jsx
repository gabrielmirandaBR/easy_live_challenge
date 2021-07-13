import { useEffect } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchCategoriesProducts, fetchProducts } from '../redux/actions';
import SearchBar from '../components/SearchBar';
import ListProducts from '../components/ListProducts';

import '../styles/Home.css';
import ListCategories from '../components/ListCategories';

function Home({ fetchItems, fetchcategories, categories }) {
	useEffect(() => {
		fetchItems();
		fetchcategories()
	}, []);

	return (
		<>
			<header>
				<SearchBar />
				<section className="categories">
					<ListCategories categories={ categories }/>
				</section>
			</header>
			<main>
				<ListProducts />
			</main>
		</>
	);
}

const mapStateToProps = (state) => ({
	categories: state.market.payload.productsCategories,
});

const mapDispatchToProps = (dispatch) => ({
	fetchItems: () => dispatch(fetchProducts()),
	fetchcategories: () => dispatch(fetchCategoriesProducts()),
});

Home.propTypes = {
	fetchItems: propTypes.func.isRequired,
	fetchcategories: propTypes.func.isRequired,
	categories: propTypes.arrayOf(propTypes.object)
};

Home.defaultProps = {
	categories: [],
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
