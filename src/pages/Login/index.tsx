import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageNotFound from '../PageNotFound';
// import './login.css';
export const Data=[
    {username:"test@123",password:"1234567"},
	{username:"exam789",password:"abcdef"}
]
const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();
  
	const onSubmit = (username: string, password: string) => {
    
    for (let i = 0; i < Data.length; i++) {
      if (username === Data[i].username &&
		  password === Data[i].password 
		) {
		   history.push("/Dashboard");
      localStorage.setItem("isAuthenticated","true");
		} else {
      
		   console.log("Invalid details");
		}
  }
	  };return (
        <div className='form'>
           <h3> Login Page </h3>
            <br></br>
            <label>Username:</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)}/><br></br><br></br>
          <label>Password:</label>
          <input type="password"onChange={(e) => setPassword(e.target.value)}/><br></br><br></br>
          <input type="button" value="submit" onClick={(event: React.MouseEvent<HTMLElement>) => {onSubmit(username, password)}} />
          </div>
      );
    };
    export default Login;

