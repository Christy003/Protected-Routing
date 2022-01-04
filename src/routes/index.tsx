import React from 'react';
import {Link,Switch,Route, BrowserRouter} from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import About from '../pages/About';
import PageNotFound from '../pages/PageNotFound';
 import ProtectedRoute from './ProtectedRoute';
 
function App(){
	
	return(
    
		<BrowserRouter>
			<nav>
				<ul>
				<li>
                <Link to = "/Login">Login</Link>
					</li>
					<li>
						<Link to ="/Dashboard">Dashboard</Link>
					</li>
					 <li>
						<Link to="/About">About</Link>
					</li>
				</ul>
			</nav>
			<hr/>
			<Switch>
			<Route exact path ="/Login" component={Login}/>
			<ProtectedRoute exact path ="/Dashboard" component={Dashboard} />
			<Route exact path ="/About" component={About}/>
			<Route path='*' exact={true} component={PageNotFound} />
			</Switch>
		</BrowserRouter>
	);
}
export default App;
