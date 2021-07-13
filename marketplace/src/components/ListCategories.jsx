import { Button, ButtonGroup } from "react-bootstrap";
import propTypes from 'prop-types';

function ListCategories({categories}) {
  return (
    <ButtonGroup>
      {
        categories !== undefined &&
        (
          categories.map((category) => 
            <Button
              type="button"
              variant="light"
              style={{ backgroundColor: 'transparent', border: 'none' }}
            >
                {category.name}
            </Button>
          )
        )
      }
    
    </ButtonGroup>
  )
}


ListCategories.propTypes = {
  categories: propTypes.arrayOf(propTypes.object).isRequired,
}
export default ListCategories;