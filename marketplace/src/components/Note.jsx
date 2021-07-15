import { Card } from "react-bootstrap";
import propTypes from 'prop-types';

function Note({noteItem}) {
  return (
    <Card>
      <Card.Body>
        
        <Card.Title>
          {noteItem.note.name}
        </Card.Title>
        
        <Card.Text>
        <span>email: </span>
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
  )
};

Note.propTypes = {
  noteItem: propTypes.shape({
    note: propTypes.shape({
      name: propTypes.string.isRequired,
      email: propTypes.string.isRequired,
      evaluation: propTypes.number,
      comment: propTypes.string,
    }),
  }).isRequired,
}

export default Note;