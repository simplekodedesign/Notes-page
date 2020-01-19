import React from "react"
import LoginForm from "../components/LoginForm"
import "../css/login.css"
import "../css/popup.css"

const Login = () => {
	return(
		<section>
			<div className="img_cont">
				<img src="img/SKDanimation.webp"/>
			</div>
			<LoginForm/>
		</section>
	)
}

export default Login