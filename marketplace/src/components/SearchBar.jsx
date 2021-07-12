import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import search from '../assets/images/search.svg';

function SearchBar() {
  const [inputValue, setInputValue] = useState('')
  return (
    <Form>
      <Form.Group>
          <Form.Control 
            type="text" 
            placeholder="Ache o seu produto" 
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
      <Button type="submit" variant="light">
        <img src={ search } alt="lupa" />
      </Button>
      </Form.Group>
    </Form>
  );
}

export default SearchBar;