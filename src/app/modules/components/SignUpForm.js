import React from "react"

const SignUpForm = () => {

	return (
		<div className="form_cont">
			<form autoComplete="off">
				<input type="text" name="username" placeholder="Username"/>
				<input type="text" name="password" placeholder="Password"/>
				<input type="text" name="password_repeat" placeholder="Repeat Password"/>
				<input type="submit" value="LogIn"/>
			</form>
		</div>
	)
}

export default SignUpForm