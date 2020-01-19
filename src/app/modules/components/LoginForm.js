import React,{useState} from "react"
import {Link} from "react-router-dom"

import handlePopup from "./handlePopup" 

const LoginForm = (props) => {
	//estableciendo estado
	const [User,setUser] = useState({
		email: "",
		password: ""
	})

	//controlar los inputs
	function handleInputChange(e){
		const {name,value} = e.target
		setUser(prev => {
			return({
				...prev,
				[name]: value
			})
		})
	}

	//controlar el envio del formulario
	function handleSubmit(e){
		e.preventDefault()
		fetch("/login",{
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
				props.setToken("bearer" + resp.token)
				window.location = "/home"				
			}
			setUser({
				email: "",
				password: ""
			})
		})
		.catch(err => console.log(err))
	}

	return (
		<div className="form_cont">
			<form onSubmit={handleSubmit} autoComplete="off">
				<input type="text" name="email" placeholder="Email" onChange={handleInputChange} value={User.email}/>
				<input type="password" name="password" placeholder="Password" onChange={handleInputChange} value={User.password}/>
				<input type="submit" value="Log In"/>
			</form>
			<Link to="/signup">Sign Up</Link>
		</div>
	)
}

export default LoginForm