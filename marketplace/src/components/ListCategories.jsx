import { Button, ButtonGroup } from "react-bootstrap";
import propTypes from 'prop-types';

function ListCategories({categories}) {
  const NUMBER_OF_CATEGORIES = 12;

  return (
    <ButtonGroup>
      {
        categories.slice(0,NUMBER_OF_CATEGORIES).map((category) => 
          <Button
            key={category.id}
            type="button"
            variant="light"
            style={{ backgroundColor: 'transparent', border: 'none' }}
          >
              {category.name}
          </Button>
        )
      }
    </ButtonGroup>
  )
}


ListCategories.propTypes = {
  categories: propTypes.arrayOf(propTypes.object)
}

ListCategories.defaultProps = {
  categories: []
}
export default ListCategories;