import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'react-feather';
import { PizzaOptionsContext } from '../contexts/PizzaOptionsContext';

const PizzaTopping = () => {
	let history = useHistory();

	// Getting state from context API
	const [state, setState] = useContext(PizzaOptionsContext);
	const [error, setError] = useState('');

	// Pizza toppings options with image name

	let topping = [
		{
			name: 'Pepperoni',
			image: 'pepperoni.png',
		},
		{
			name: 'Mushrooms',
			image: 'mushrooms.png',
		},
		{
			name: 'Onions',
			image: 'onions.png',
		},
		{
			name: 'Bacon',
			image: 'bacon.png',
		},
		{
			name: 'Extra cheese',
			image: 'cheese.png',
		},
		{
			name: 'Black olives',
			image: 'olive.png',
		},
		{
			name: 'Green peppers',
			image: 'green-pepper.png',
		},
		{
			name: 'Pineapple',
			image: 'pineapple1.png',
		},
		{
			name: 'Spinach',
			image: 'spinach.png',
		},
	];

	const handleCheckboxChange = (e) => {
		setError('');

		let selectedTopping = e.target.value;
		let selected = e.target.checked;
		let allToppings = state.pizzaToppings;
		let size = state.pizzaSize;
		if (selected) {
			setState((state) => ({
				...state,
				pizzaToppings: [...allToppings, selectedTopping],
			}));
			let length = allToppings.length + 1;
			if (length >= 3) {
				// tpooing count validation after min criteria
				if (size === 'Small' && length > 5) {
					setError(
						'Sorry! You cannot select more than 5 toppings for a small pizza!'
					);
					return;
				} else if (size === 'Medium' && length > 7) {
					setError(
						'Sorry! You cannot select more than 7 toppings for a medium pizza!'
					);
					return;
				} else if (size === 'Large' && length > 9) {
					setError(
						'Sorry! You cannot select more than 9 toppings for a large pizza!'
					);
					return;
				} else {
					setError('');
					let price = 0;
					let extraToppings = length - 3;
					if (extraToppings > 0) {
						price = extraToppings * 0.5;
						setState((state) => ({
							...state,
							toppingsPrice: price,
							totalPrice:
								state.sizePrice + state.crustPrice + price,
						}));
					}
				}
			}
		}
	};
	return (
		<>
			<div className='pizza--create--menu d-flex align-items-center'>
				<div className='w-100 pt-3'>
					<h3 className='mb-2'>Select your pizza toppings</h3>
					<p className='text-muted mb-3'>
						You need to select atleast 3 toppings
					</p>
					<div className='pizza--topping mb-2'>
						{topping.map((topping, i) => {
							return (
								<div
									className={`white--card animate-pop-in animate-pop-in-${i}`}
									key={`pizza-${topping.name}`}
								>
									<input
										className='styled-checkbox'
										type='checkbox'
										id={topping.name}
										value={topping.name}
										onChange={(e) =>
											handleCheckboxChange(e)
										}
										checked={
											state.pizzaToppings.indexOf(
												topping.name
											) > -1
												? true
												: false
										}
									/>
									<label
										htmlFor={topping.name}
										className='checkbox-label d-flex align-items-center'
									>
										<div className='d-flex justify-content-between w-100'>
											<div className='d-flex justify-content-start align-items-center'>
												<span>{topping.name}</span>
											</div>
											<img
												// eslint-disable-next-line no-undef
												src={require(`../assets/${topping.image}`)}
												className='topping--img'
												alt={topping.name}
											/>
										</div>
									</label>
								</div>
							);
						})}
					</div>
					{<p className='text-danger'>{error}</p>}
					<div className='d-flex justify-content-between align-items-center mt-2'>
						<button
							className='btn custom--primary--btn'
							onClick={() => {
								history.push('/select-pizza-crust');
							}}
						>
							<ArrowLeft size={18} color='#fff' />
							Back
						</button>
						<span className='white--card mb-0 price-tag'>
							<p>Total = {state.totalPrice}</p>
						</span>
						<button
							className='btn custom--primary--btn'
							onClick={() => history.push('/checkout')}
							disabled={
								state.pizzaToppings.length < 3 ? true : false
							}
						>
							Checkout <ArrowRight size={18} color='#fff' />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default PizzaTopping;
