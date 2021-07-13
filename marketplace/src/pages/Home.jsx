import { useEffect } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchProducts } from '../redux/actions';
import SearchBar from '../components/SearchBar';
import ListProducts from '../components/ListProducts';

import '../styles/Home.css';
import ListCategories from '../components/ListCategories';

function Home({ fetchItems }) {
	useEffect(() => {
		fetchItems();
	});

	return (
		<>
			<header>
				<SearchBar />
				<section className="categories">
					<ListCategories />
				</section>
			</header>
			<main>
				<ListProducts />
			</main>
		</>
	);
}

const mapDispatchToProps = (dispatch) => ({
	fetchItems: () => dispatch(fetchProducts()),
});

Home.propTypes = {
	fetchItems: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Home);
