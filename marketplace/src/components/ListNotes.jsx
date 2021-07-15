import propTypes from 'prop-types';
import { Card, ListGroup } from 'react-bootstrap';
import Note from './Note';

import '../styles/ListNotes.css';

function ListNotes({ notes }) {
	return (
		<ListGroup className="notes">
      <Card.Title className="notes__title">
				Avaliações do produto
			</Card.Title>
      {
        notes.length > 0 
        ?
        notes.map((note) => (
          <Note key={note.name} noteItem={note} />
        ))
      :
        <Card.Text className="notes__message">Não há comentários para este produto</Card.Text>
      }
			{}
		</ListGroup>
	);
}

ListNotes.propTypes = {
	notes: propTypes.arrayOf(propTypes.object).isRequired,
};

export default ListNotes;
