import React,{useState} from "react"
import {Link} from "react-router-dom"

import handlePopup from "./handlePopup" 

const SignUpForm = () => {

	//estableciendo estado
	const [User,setUser] = useState({
		email: "",
		password: "",
		password_repeat: ""
	})

	//controlar los inputs del formulario
	function handleInputChange(e){
		const {name,value} = e.target
		setUser(prev => {
			return({
				...prev,
				[name]: value
			})
		})
	}

	//manejar el envio de formulario
	function handleSubmit(e){
		e.preventDefault()
		fetch("/login/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(User)
		})
		.then(resp => resp.json())
		.then(resp => {
			if(resp.status != 1){
				handlePopup(resp.message)
			}else{
				console.log(resp)
			}
		})
		.catch(err => console.log(err))
	}

	return (
		<div className="form_cont">
			<form onSubmit={handleSubmit} autoComplete="off">
				<input type="text" name="email" placeholder="Email" onChange={handleInputChange} value={User.email}/>
				<input type="password" name="password" placeholder="Password" onChange={handleInputChange} value={User.password}/>
				<input type="password" name="password_repeat" placeholder="Repeat Password" onChange={handleInputChange} value={User.password_repeat}/>
				<input type="submit" value="Sign Up"/>
			</form>
			<Link to="/">Log In</Link>
		</div>
	)
}

export default SignUpForm