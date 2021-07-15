import propTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import Note from "./Note";

import '../styles/ListNotes.css';

function ListNotes({notes}) {
  return (
    <ListGroup className="notes">
      {
        notes.map((note) => <Note key={note.name} noteItem={note} />)
      }
    </ListGroup>
  )
};

ListNotes.propTypes = ({
  notes: propTypes.arrayOf(propTypes.object).isRequired,
})

export default ListNotes