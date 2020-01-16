import React from "react"
import SignUpForm from "../components/SignUpForm"
import "../css/login.css"

const SignUp = () => {
	return(
		<section>
			<div className="img_cont">
				<img src="img/SKDanimation.webp"/>
			</div>
			<SignUpForm/>
		</section>
	)
}

export default SignUp