import { Card } from "react-bootstrap";
import propTypes from 'prop-types';

function Product({ item }) {
  return (
    <section>
      <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={item.thumbnail} alt={item.title}/>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>R$ {item.price}</Card.Text>
        </Card.Body>
      </Card>
    </section>
  )
}

Product.propTypes = {
  item: propTypes.shape({
    thumbnail: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
  }).isRequired,
};



export default Product;