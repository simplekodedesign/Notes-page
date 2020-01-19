import React from "react"
import LoginForm from "../components/LoginForm"
import "../css/login.css"
import "../css/popup.css"

const Login = (props) => {
	return(
		<section>
			<div className="img_cont">
				<img src="img/SKDanimation.webp"/>
			</div>
			<LoginForm setToken={props.setToken}/>
		</section>
	)
}

export default Login