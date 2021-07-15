import { Card } from 'react-bootstrap';
import propTypes from 'prop-types';

import '../styles/Note.css';

function Note({ noteItem }) {
	return (
		<section className="note">
			<Card
				style={{
					borderRadius: '30px',
					backgroundColor: '#f8f9fa',
					margin: '5px 0',
				}}
			>
				<Card.Body>
					<Card.Title className="note__name">{noteItem.note.name}</Card.Title>

					<Card.Text>
						<span id="email">email: </span>
						{noteItem.note.email}
					</Card.Text>

					<Card.Text>
						<span>Avaliação do produto: </span>
						{noteItem.note.evaluation}
					</Card.Text>
					<Card.Text>
						<span>Comentário: </span>
						{noteItem.note.comment}
					</Card.Text>
				</Card.Body>
			</Card>
		</section>
	);
}

Note.propTypes = {
	noteItem: propTypes.shape({
		note: propTypes.shape({
			name: propTypes.string.isRequired,
			email: propTypes.string.isRequired,
			evaluation: propTypes.string,
			comment: propTypes.string,
		}),
	}).isRequired,
};

export default Note;
