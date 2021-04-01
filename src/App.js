import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// importing context
import {ProductContext} from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		// want to add to the cart, without getting rid of the state of cart?
		// no array will give error for .map
		// just [item] will constantly overwrite
		// have to spread current state of cart and add item to array
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }} >
			<CartContext.Provider value={cart}>
					<Navigation/>

					{/* Routes */}
					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
