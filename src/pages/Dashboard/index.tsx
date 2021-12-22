import React, { useState } from 'react';

function Dashboard(){
	const [isAuth,setisAuth]=useState(false);
	return(
		<>
			<p>  Welcome </p>
			<p>Dashboard</p>
			<button onClick={()=>setisAuth(true)}>Log In</button>
			<button onClick={()=>setisAuth(false)}>Logout</button>
		</>
	);
}
export default Dashboard;