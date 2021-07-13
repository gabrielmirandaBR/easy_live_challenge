import { Button } from 'react-bootstrap';
import propTypes from 'prop-types';

import '../styles/ListCategories.css'

function ListCategories({ categories }) {
	const NUMBER_OF_CATEGORIES = 12;

	return (
		<section className="categories">
			{categories.slice(0, NUMBER_OF_CATEGORIES).map((category) => (
				<Button
					key={category.id}
					type="button"
					variant="light"
					style={{
						backgroundColor: 'rgb(248, 249, 250)',
						border: 'none',
						marginRight: '5px',
						borderRadius: '30px',
						fontSize: '0.75rem',
            minWidth: '75px',
            padding: '5px',
					}}
				>
					{category.name}
				</Button>
			))}
		</section>
	);
}

ListCategories.propTypes = {
	categories: propTypes.arrayOf(propTypes.object),
};

ListCategories.defaultProps = {
	categories: [],
};
export default ListCategories;
