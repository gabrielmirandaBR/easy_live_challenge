import { useEffect } from "react";
import { connect } from "react-redux";
import propTypes from 'prop-types';
import { fetchProducts } from "../redux/actions";
import SearchBar from "../components/SearchBar";
import ListProducts from "../components/ListProducts";

function Home({fetchItems}) {

  useEffect(()=> {
    fetchItems();
  })

  return (
    <>
      <header>
        <SearchBar />
      </header>
      <main>
        <ListProducts />
      </main>

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