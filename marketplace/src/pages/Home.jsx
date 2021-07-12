import { useEffect } from "react";
import { connect} from "react-redux";
import propTypes from 'prop-types';
import { fetchProducts } from "../redux/actions";

function Home({fetchItems}) {

  useEffect(()=> {
    fetchItems()
  }, [])

  return (
    <h1>Loja</h1>
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchItems: () => dispatch(fetchProducts())
})

Home.propTypes = {
  fetchItems: propTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Home);