import { Toast } from 'react-bootstrap';
import propTypes from 'prop-types';

import '../styles/ToastBox.css';

function ToastBox({ show, setShow }) {
	return (
		<section className="toastbox">
			<Toast
				onClose={() => setShow(false)}
				show={show}
				delay={3000}
				autohide
				className="toastbox__toast"
			>
				<Toast.Header>
					<img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
				</Toast.Header>
				<Toast.Body>
					<img
						src="https://img.icons8.com/material-outlined/24/000000/add-shopping-cart.png"
						alt="shopping cart plus"
					/>{' '}
					Produto adicionado ao carrinho!
				</Toast.Body>
			</Toast>
		</section>
	);
}

ToastBox.propTypes = {
	show: propTypes.bool.isRequired,
	setShow: propTypes.func.isRequired,
};

export default ToastBox;
