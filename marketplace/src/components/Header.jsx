import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

import '../styles/Header.css';

function Header({ dropDownMenu }) {
	return (
		<Navbar variant="light" bg="light" expand="lg" id="header">
			<Link to="/">
				<img className="header__logo" src={logo} alt="logo" />
			</Link>
			{dropDownMenu && (
				<>
					<Navbar.Toggle aria-controls="navbar-dark-example" />
					<Navbar.Collapse id="navbar-dark-example">
						<Nav>
							<NavDropdown.Divider />
							<NavDropdown.Item href="/">Carrinho</NavDropdown.Item>
							<NavDropdown.Divider />
						</Nav>
					</Navbar.Collapse>
				</>
			)}
		</Navbar>
	);
}

Header.propTypes = {
	dropDownMenu: propTypes.bool,
};

Header.defaultProps = {
	dropDownMenu: undefined,
};

export default Header;
