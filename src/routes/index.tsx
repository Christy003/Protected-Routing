import React from 'react';
import {Link,Switch,Route, BrowserRouter} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import About from '../pages/About';
import PageNotFound from '../pages/PageNotFound';
import ProtectedRoutes from './ProtectedRoutes';



function App(){
	
	return(
    
		<BrowserRouter>
			<nav>
				<ul>
					<li>
						<Link to ="/Dashboard">Dashboard</Link>
					</li>
					{/* <li>
                <Link to="/PageNotFound">PageNotFound</Link>
            </li> */}
					<li>
						<Link to="/About">About</Link>
					</li>
				</ul>
			</nav>
			<hr/>
			<Switch>
				<Route exact path ="/Dashboard" component={Dashboard}/>
				<Route exact path ="/About" component={About}/>
				{/* <Route exact path="/PageNotFound"><PageNotFound /></Route> */}
				<ProtectedRoutes path="/About" component={About} isAuth={isAuth}/>
			</Switch>
		</BrowserRouter>
	);
}
export default App;
