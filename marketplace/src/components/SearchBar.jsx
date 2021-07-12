import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import propTypes from 'prop-types';
import { connect } from "react-redux";
import search from '../assets/images/search.svg';
import { fetchFilteredProducts } from "../redux/actions";

function SearchBar({fetchFilteredItems}) {
  const [inputValue, setInputValue] = useState('')

  function handleSubmit(event) {
    event.preventDefault();
    fetchFilteredItems(inputValue)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
          <Form.Control 
            type="text" 
            placeholder="Ache o seu produto" 
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
      </Form.Group>
      <Button type="submit" variant="light">
        <img src={ search } alt="lupa" />
      </Button>
    </Form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchFilteredItems: (product) => dispatch(fetchFilteredProducts(product))
});

SearchBar.propTypes = {
  fetchFilteredItems: propTypes.func.isRequired,
}

export default connect (null, mapDispatchToProps )(SearchBar);