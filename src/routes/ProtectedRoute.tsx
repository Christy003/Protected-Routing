
import React from "react";
import {Route,Redirect} from "react-router-dom";
function ProtectedRoute({component:Component,...restofprops}:any)
    
    {
    const isAuth = localStorage.getItem("isAuthenticated");
    console.log("this",isAuth);
    return(
    <Route {...restofprops} render = {props=> isAuth ? <Component {...props} />: <Redirect to= "/Login"/> } />

 );

}
export default ProtectedRoute ;