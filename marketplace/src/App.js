import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

import './assets/App.css';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';

function App() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/product/:id" component={ProductDetails} />
			<Route path='/shopping_cart' component={ShoppingCart} />
		</Switch>
	);
}

export default App;
