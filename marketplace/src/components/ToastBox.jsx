import {  Toast } from 'react-bootstrap';
import propTypes from 'prop-types';

function ToastBox({show, setShow}) {
  return (
    <Toast
			onClose={() => setShow(false)}
			show={show}
			delay={3000}
			autohide
			className="toast"
		>
			<Toast.Header>
				<img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
			</Toast.Header>
			<Toast.Body>
				<img src="https://img.icons8.com/material-outlined/24/000000/add-shopping-cart.png" alt="shopping cart plus"/>
				{' '}
				Produto adicionado ao carrinho!
			</Toast.Body>
		</Toast>
  )
};

ToastBox.propTypes = {
	show: propTypes.bool.isRequired,
	setShow: propTypes.func.isRequired,
};

export default ToastBox;