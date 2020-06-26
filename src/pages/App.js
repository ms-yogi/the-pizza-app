import React from 'react';
import '../styles/style.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PizzaCrust from './PizzaCrust';
import PizzaSize from './PizzaSize';
import PizzaTopping from './PizzaTopping';
import Home from './Home';
import Checkout from './Checkout';
import { PizzaOptionsProvider } from '../contexts/PizzaOptionsContext';

function App() {
	return (
		<>
			{/* left panel common for all pages */}
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-lg-6 col-md-6 col-sm-5 d-none d-sm-block pizza--pic'></div>
					<div className='col-lg-6 col-md-6 col-sm-7 col-xs-12 pizza--details'>
						<h1>PizzaStore</h1>

						{/* Other pages in router */}
						<Router>
							<Switch>
								{/* Added context api to maintain state throughout the app */}
								<PizzaOptionsProvider>
									<Route path='/' exact component={Home} />
									<Route
										path='/select-pizza-crust'
										component={PizzaCrust}
									/>
									<Route
										path='/select-pizza-topping'
										component={PizzaTopping}
									/>
									<Route
										path='/select-pizza-size'
										component={PizzaSize}
									/>
									<Route
										path='/checkout'
										component={Checkout}
									/>
								</PizzaOptionsProvider>
							</Switch>
						</Router>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
