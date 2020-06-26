import React from 'react';
import '../styles/style.scss';
import { useHistory } from 'react-router-dom';
import { ArrowRight } from 'react-feather';

// Landing page component
const Home = () => {
	let history = useHistory();

	return (
		<>
			<div className='pizza--create--menu d-flex align-items-center'>
				<div>
					<h2 className='animate-pop-up animate-pop-up-1'>
						We have all the customizations for you, order your pizza
						now!
					</h2>
					<p className='info--text animate-pop-up animate-pop-up-2'>
						Pizzastore lets you choose your own kinda pizza. Eat
						what you love and save your time for something cool.
					</p>
					<button
						className='btn custom--primary--btn animate-pop-up animate-pop-up-3'
						onClick={() => {
							history.push('/select-pizza-size');
						}}
					>
						Order your pizza <ArrowRight size={18} color='#fff' />
					</button>
				</div>
			</div>
		</>
	);
};

export default Home;
