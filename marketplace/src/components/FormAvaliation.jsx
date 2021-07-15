import { Button, Card, Form } from 'react-bootstrap';
import propTypes from 'prop-types';

import '../styles/FormAvaliation.css';

function FormAvaliation({
	handleSubmit,
	name,
	setName,
	email,
	setEmail,
	evaluation,
	setEvaluation,
	comment,
	setComment,
}) {
	return (
		<Card
			style={{
				borderRadius: '30px',
				backgroundColor: '#f8f9fa',
			}}
		>
			<Card.Body>
				<Card.Title className="avaliation__title">
					Avaliações do produto
				</Card.Title>
				<Form onSubmit={handleSubmit}>
					<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						<Form.Label>Nome</Form.Label>
						<Form.Control
							className="mb-3"
							type="text"
							value={name}
							onChange={(event) => setName(event.target.value)}
							placeholder="nome@exemplo.com"
						/>
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							placeholder="nome@exemplo.com"
						/>
					</Form.Group>

					<Form.Label>Avaliação</Form.Label>
					<div className="avaliation__range">
						<span>Ruim</span>
						<span>Mediana</span>
						<span>Ótima</span>
					</div>
					<Form.Control
						className="mb-3"
						value={evaluation}
						onChange={(event) => setEvaluation(event.target.value)}
						type="range"
						min="0"
						max="10"
					/>

					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
						<Form.Label>Comentário</Form.Label>
						<Form.Control
							as="textarea"
							rows={3}
							value={comment}
							onChange={(event) => setComment(event.target.value)}
							style={{ resize: 'none' }}
							maxLength="50"
							placeholder="Máximo de 50 caracteres."
						/>
					</Form.Group>

					<Button variant="primary" type="submit" id="avaliation__button">
						Enviar
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
}

FormAvaliation.propTypes = {
	handleSubmit: propTypes.func.isRequired,
	name: propTypes.string.isRequired,
	setName: propTypes.func.isRequired,
	email: propTypes.string.isRequired,
	setEmail: propTypes.func.isRequired,
	comment: propTypes.string.isRequired,
	setComment: propTypes.func.isRequired,
	evaluation: propTypes.number.isRequired,
	setEvaluation: propTypes.func.isRequired,
};

export default FormAvaliation;
