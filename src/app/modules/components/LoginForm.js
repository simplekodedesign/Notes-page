import React from "react"
import {Link} from "react-router-dom"

const LoginForm = () => {

	return (
		<div className="form_cont">
			<form autoComplete="off">
				<input type="text" name="username" placeholder="Username"/>
				<input type="text" name="password" placeholder="Password"/>
				<input type="submit" value="LogIn"/>
			</form>
			<Link to="/signup">Sign Up</Link>	
		</div>
	)
}

export default LoginForm