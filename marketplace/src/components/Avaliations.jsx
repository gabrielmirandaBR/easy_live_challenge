import { useState } from "react";
import FormAvaliation from "./FormAvaliation";
import ListNotes from "./ListNotes";

import '../styles/AvaliationForm.css';

function Avaliations() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [evaluation, setEvaluation] = useState(5);
  const [comment, setComment] = useState('');
  const [notes, setNotes] = useState([])

  function handleSubmit(event) {
    event.preventDefault();

    const note = ({
      name,
      email,
      evaluation,
      comment,
    });

    const newNotes = [...notes, {note}];
    setNotes(newNotes);
  }

  return (
    <section className="avaliation">

      <section>
        <FormAvaliation
          name={name}
          email={email}
          comment={comment}
          evaluation={evaluation} 
          handleSubmit={handleSubmit} 
          setName={setName} 
          setEmail={setEmail} 
          setComment={setComment} 
          setEvaluation={setEvaluation} 
        />
      </section>

      <section>
        <ListNotes notes={notes} />
      </section>

    </section>
  )
}

export default Avaliations;