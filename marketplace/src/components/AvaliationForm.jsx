import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

import '../styles/AvaliationForm.css';

function AvaliationForm() {
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
 			<Card
				style={{
					borderRadius: '30px',
					backgroundColor: '#f8f9fa',
				}}
			>
        <Card.Body>
          <Card.Title className="avaliation__title">Avaliações do produto</Card.Title>
          <Form onSubmit={ handleSubmit }>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome</Form.Label>
              <Form.Control className="mb-3" type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="nome@exemplo.com" />
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="nome@exemplo.com" />
            </Form.Group>
            
              <Form.Label>Avaliação</Form.Label>
              <div className="avaliation__range">
                <span>Ruim</span>
                <span>Mediana</span>
                <span>Ótima</span>
              </div>
              <Form.Control className="mb-3" value={evaluation} onChange={(event) => setEvaluation(event.target.value)} type="range"  min="0" max="10" />

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Comentário</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                value={comment} 
                onChange={(event) => setComment(event.target.value)} 
                style={{resize: 'none'}} 
                maxLength="50" 
                placeholder="Máximo de 50 caracteres." />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </section>
  )
}

export default AvaliationForm;