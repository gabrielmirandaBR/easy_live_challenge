import { useEffect } from "react";
import { connect } from "react-redux";
import propTypes from 'prop-types';
import { fetchProducts } from "../redux/actions";
import SearchBar from "../components/SearchBar";

function Home({fetchItems}) {

  useEffect(()=> {
    fetchItems()
  }, [])

  return (
    <>
      <header>
        <SearchBar />
      </header>
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchItems: () => dispatch(fetchProducts())
})

Home.propTypes = {
  fetchItems: propTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Home);