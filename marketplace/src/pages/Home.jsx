import { useEffect } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchProducts } from '../redux/actions';
import SearchBar from '../components/SearchBar';
import ListProducts from '../components/ListProducts';

import '../styles/Home.css';

function Home({ fetchItems }) {
	useEffect(() => {
		fetchItems();
	});

	return (
		<>
			<header>
				<SearchBar />
        <div className='gift'>
          <img className="gift__animation" src="https://media.giphy.com/media/JmVItNiJ8PGSnDVf0e/source.gif" alt="gift" />
        </div>
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
