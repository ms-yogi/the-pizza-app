import React, { useState, createContext } from 'react';

export const PizzaOptionsContext = createContext([{}, () => {}]);

const PizzaOptionsProvider = (props) => {
	// default values
	let stateObject = {
		pizzaSize: '',
		sizePrice: 0,
		pizzaCrust: '',
		crustPrice: 0,
		pizzaToppings: [],
		toppingsPrice: 0,
		totalPrice: 0,
	};

	const [state, setState] = useState(stateObject);

	return (
		<PizzaOptionsContext.Provider value={[state, setState]}>
			{props.children}
		</PizzaOptionsContext.Provider>
	);
};

export { PizzaOptionsProvider };
