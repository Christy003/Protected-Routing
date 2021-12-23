
import React from "react";
import {Route,Redirect} from "react-router-dom";
import {Component} from "react"

function ProtectedRoute({component:Component,...restofprops}){
    const isAuthenticted = localStorage.getItem("isAuthenticated");
    console.log("this",isAuthenticted);
    return(
    <Route {...restofprops} render = {(props)=> isAuthenticted ? <Component {...props} />: <Redirect to= "/PageNotFound"/>
        }
    

  />

 );
     }
export default ProtectedRoute ;