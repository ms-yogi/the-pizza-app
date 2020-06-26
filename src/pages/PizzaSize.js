import React, { useContext } from 'react';
import { PizzaOptionsContext } from '../contexts/PizzaOptionsContext';
import { useHistory } from 'react-router-dom';
import { ArrowRight } from 'react-feather';

const PizzaSize = () => {
	let history = useHistory();

	// Getting state from context API
	const [state, setState] = useContext(PizzaOptionsContext);

	// Pizza sizes options
	let sizes = [
		{
			size: 'Small',
			serves: '1',
			price: '$8',
			value: 8,
		},
		{
			size: 'Medium',
			serves: '2',
			price: '$10',
			value: 10,
		},
		{
			size: 'Large',
			serves: '4',
			price: '$12',
			value: 12,
		},
	];

	const handleRadioChange = (e, size) => {
		let price = Number(e.target.value);
		// Updating a state after selecting size
		// updated the price of size just to ensure the back button feature
		setState((state) => ({
			...state,
			pizzaSize: size,
			sizePrice: price,
			totalPrice: price + state.crustPrice + state.toppingsPrice,
		}));
	};

	return (
		<>
			<div className='pizza--create--menu d-flex align-items-center'>
				<div className='w-100 py-3'>
					<h3>Select your pizza size</h3>

					{sizes.map((size, i) => {
						return (
							<div
								className={`white--card animate-pop-in animate-pop-in-${i}`}
								key={`pizza-${size.size}`}
							>
								<label className='radio--label'>
									<div className='d-flex justify-content-between'>
										<span>
											{size.size}
											<p className='muted--text'>{`Serves ${size.serves}`}</p>
										</span>
										<span>
											<b>{size.price}</b>
										</span>
									</div>
									<input
										type='radio'
										name='radio'
										onChange={(e) =>
											handleRadioChange(e, size.size)
										}
										value={size.value}
										checked={
											size.size === state.pizzaSize
												? true
												: false
										}
									/>
									<span className='radio--circle'></span>
								</label>
							</div>
						);
					})}
					<div className='d-flex justify-content-between align-items-center'>
						<span className='white--card mb-0 price-tag'>
							<p>Total = {state.totalPrice}</p>
						</span>
						<button
							className='btn custom--primary--btn'
							onClick={() => history.push('/select-pizza-crust')}
							disabled={state.pizzaSize ? false : true}
						>
							Next <ArrowRight size={18} color='#fff' />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default PizzaSize;
