import { Navbar, NavDropdown } from 'react-bootstrap';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/Header.css';

function Header({ dropDownMenu }) {
	return (
		<section className="header">
			<Navbar variant="light" bg="light" expand="lg">
				<Link to="/">
					<img
						className="header__logo"
						src="https://img.icons8.com/ios-filled/100/4a90e2/online-shop-shopping-bag.png"
						alt="logo"
					/>
					<h6 className="header__title">blue shopping</h6>
				</Link>
				{dropDownMenu && (
					<>
						<Navbar.Toggle aria-controls="navbar-dark-example" />
						<Navbar.Collapse id="navbar-dark-example">
							<NavDropdown.Divider />
							<Link to="/shopping_cart" className="header__link">
								Carrinho
							</Link>
							<NavDropdown.Divider />
						</Navbar.Collapse>
					</>
				)}
			</Navbar>
		</section>
	);
}

Header.propTypes = {
	dropDownMenu: propTypes.bool,
};

Header.defaultProps = {
	dropDownMenu: undefined,
};

export default Header;
