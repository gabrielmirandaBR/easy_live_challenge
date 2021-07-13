import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import propTypes from 'prop-types';
import { connect } from "react-redux";
import search from '../assets/images/search.svg';
import { fetchFilteredProducts } from "../redux/actions";

import '../styles/SearchBar.css';


function SearchBar({fetchFilteredItems}) {
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetchFilteredItems(inputValue);
  };

  return (
    <section>
      <Form onSubmit={handleSubmit} className="search">
        <Form.Group>
            <Form.Control
              className="search__input"
              type="text" 
              placeholder="Ache o seu produto" 
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
        </Form.Group>
        <Button
          className="search__button"
          type="submit" 
          variant="light"
        >
          <img src={ search } alt="lupa" />
        </Button>
      </Form>
    </section>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchFilteredItems: (product) => dispatch(fetchFilteredProducts(product))
});

SearchBar.propTypes = {
  fetchFilteredItems: propTypes.func.isRequired,
}

export default connect (null, mapDispatchToProps)(SearchBar);