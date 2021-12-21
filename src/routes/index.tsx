import React from "react";
import {BrowserRouter as Router,Link,Switch,Route, BrowserRouter} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import PageNotFound from "../pages/PageNotFound";


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
        <Route path='*' component={PageNotFound}/>
    </Switch>
    </BrowserRouter>
    );
}
export default App;
