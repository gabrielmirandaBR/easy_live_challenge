import { Button, Card } from "react-bootstrap";
import propTypes from 'prop-types';

import '../styles/Product.css';

function Product({ item }) {
  return (
    <Button 
      variant="light" 
      style={{backgroundColor: 'transparent', border: 'none'}}
    >
      <Card 
        className="product__card" 
        style={{borderRadius: '30px', backgroundColor: '#f8f9fa', minWidth: '8rem'}}
      >
        <Card.Img 
          className="product__image" 
          variant="top" 
          src={item.thumbnail} 
          alt={item.title}
        />
        <Card.Body>
          <Card.Title 
            className="product__title" 
            style={{fontSize: '1rem', textAlign: 'center'}}
          >
            {item.title}
          </Card.Title>
          <Card.Text className="product__price" >R$ {item.price.toFixed(2)}</Card.Text>
        </Card.Body>
      </Card>
    </Button>
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