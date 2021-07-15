import { useState } from 'react';
import { Button } from 'react-bootstrap';

import '../styles/ButtonToTop.css';

function ButtonToTop() {
	const [visible, setVisible] = useState(false);

	function toggleVisible() {
		const scrolled = document.documentElement.scrollTop;

		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	}

	function handleClick() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	window.addEventListener('scroll', toggleVisible);

	return (
		<section className="top-button">
			<Button
				type="button"
				onClick={() => handleClick()}
				style={{
					backgroundColor: 'white',
					border: 'none',
					display: visible ? 'inline' : 'none',
				}}
			>
				<img
					src="https://img.icons8.com/ios/50/000000/double-up.png"
					alt="top arrow"
				/>
			</Button>
		</section>
	);
}

export default ButtonToTop;
