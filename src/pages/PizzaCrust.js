import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'react-feather';
import { PizzaOptionsContext } from '../contexts/PizzaOptionsContext';

const PizzaCrust = () => {
	let history = useHistory();

	// Getting state from context API
	const [state, setState] = useContext(PizzaOptionsContext);

	// Pizza crust options
	let pizzacrust = [
		{
			crust: 'Thin',
			price: '$2',
			value: 2,
		},
		{
			crust: 'Thick',
			price: '$4',
			value: 4,
		},
	];

	const handleRadioChange = (e, selectedCrust) => {
		let price = Number(e.target.value);
		// Updating a state after selecting crust
		setState((state) => ({
			...state,
			pizzaCrust: selectedCrust,
			crustPrice: price,
			totalPrice: state.sizePrice + price + state.toppingsPrice,
		}));
	};

	return (
		<>
			<div className='pizza--create--menu d-flex align-items-center'>
				<div className='w-100 py-3'>
					<h3>Select a crust for your pizza</h3>
					{pizzacrust.map((pizzacrust, i) => {
						return (
							<div
								className={`white--card animate-pop-in animate-pop-in-${i}`}
								key={`pizza-${pizzacrust.crust}`}
							>
								<label className='radio--label'>
									<div className='d-flex justify-content-between'>
										<span>{pizzacrust.crust}</span>
										<span>
											<b>{pizzacrust.price}</b>
										</span>
									</div>
									<input
										type='radio'
										name='radio'
										value={pizzacrust.value}
										onChange={(e) =>
											handleRadioChange(
												e,
												pizzacrust.crust
											)
										}
										checked={
											pizzacrust.crust ===
												state.pizzaCrust && true
										}
									/>
									<span className='radio--circle'></span>
								</label>
							</div>
						);
					})}

					<div className='d-flex justify-content-between align-items-center'>
						<button
							className='btn custom--primary--btn'
							onClick={() => history.push('/select-pizza-size')}
						>
							<ArrowLeft size={18} color='#fff' />
							Back
						</button>
						<span className='white--card mb-0 price-tag'>
							<p>Total = {state.totalPrice}</p>
						</span>
						<button
							className='btn custom--primary--btn'
							onClick={() =>
								history.push('/select-pizza-topping')
							}
							disabled={state.pizzaCrust ? false : true}
						>
							Next <ArrowRight size={18} color='#fff' />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default PizzaCrust;
