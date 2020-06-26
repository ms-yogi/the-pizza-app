import React, { useEffect, useState, useContext } from 'react';
import { PizzaOptionsContext } from '../contexts/PizzaOptionsContext';
import { useHistory } from 'react-router-dom';
import { ArrowRight } from 'react-feather';

const Checkout = () => {
	let history = useHistory();

	// Getting state from context API
	const [state] = useContext(PizzaOptionsContext);
	const [order, setOrder] = useState(false);

	useEffect(() => {
		// Redirecting user to select pizza size
		// to avoid user directly landing on this page from link
		state.pizzaSize === '' && history.push('/select-pizza-size');
	});

	return (
		<>
			<div className='pizza--create--menu d-flex align-items-center'>
				<div className='w-100 py-3'>
					<h3>Your Customized Pizza</h3>

					<div
						className={`white--card animate-pop-in animate-pop-in-1`}
					>
						<p>Size: {state.pizzaSize}</p>
						<p>Crust:{state.pizzaCrust}</p>
						<p>
							All Toppings:
							{state.pizzaToppings.map((topping) => (
								<span key={topping}>{topping}, </span>
							))}
						</p>
						<p>
							<b>Total Price: {state.totalPrice}</b>
						</p>
					</div>

					{order && (
						<p className='mb-3'>
							Order Confirmed!! Happiness on your way :)
						</p>
					)}

					<div className='d-flex justify-content-between align-items-center'>
						<button
							className='btn custom--primary--btn'
							onClick={() => {
								setOrder(true);
							}}
						>
							{order ? (
								// Just a placeholder for now
								<span>Track your order</span>
							) : (
								<span>
									Confirm Order{' '}
									<ArrowRight size={18} color='#fff' />
								</span>
							)}
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Checkout;
