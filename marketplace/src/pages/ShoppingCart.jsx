import { useEffect } from "react";
import { connect } from "react-redux";
import propTypes from 'prop-types';
import { Card, ListGroup } from "react-bootstrap";
import Header from "../components/Header";

import '../styles/ShoppingCart.css';

function ShoppingCart({itemsInShoppingCart}) {

  function sumTotalValue() {
    const totalValue = itemsInShoppingCart.reduce((acc, currentValue) => Number(acc) + Number(currentValue.price),[0]);

    return Number(totalValue).toFixed(2);
  }
  
  useEffect(() => {
    sumTotalValue()
  }, [itemsInShoppingCart])
  
  return (
    <section className="shopping">
      <Header />
        <Card className="shopping__card">
          <Card.Header>
            <span className="card__quantity">Itens no carrinho: {itemsInShoppingCart.length}</span>
            <span className="card__total">
              Total: {sumTotalValue()}
            </span>
          </Card.Header>
          <ListGroup variant="flush">
            {
              itemsInShoppingCart.map((item) => {
                console.log('oi');
                return (
                  <ListGroup.Item key={item.id}>
                    <img src={item.thumbnail} alt={item.title} width="70px" height="70px"/>
                    <p className="card__title">{item.title}</p>
                    <p>Quantidade: 1</p>
                    <p className="card__price">R$ {item.price.toFixed(2)}</p>
                  </ListGroup.Item>
                )
              })
            }
          </ListGroup>
        </Card>
    </section>
  )
}

const mapStateToProps = (state) => ({
  itemsInShoppingCart: state.market.payload.productsInShoppingCart
});


ShoppingCart.propTypes = {
  itemsInShoppingCart: propTypes.arrayOf(propTypes.object),
};

ShoppingCart.defaultProps = {
  itemsInShoppingCart: []
};

export default connect(mapStateToProps)(ShoppingCart);
