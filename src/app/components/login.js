import React,{Component} from "react"
import {render} from "react-dom"
import LoginInput from "./loginInput"

class Login extends Component{
	constructor(props){
		super(props)		
	}	

	render(){
		return(
			<form onSubmit={this.props.onSubmit}>
				<LoginInput type="text" placeholder="Email" onChange={this.props.inputChange} name="email" value={this.props.email}/>
				<LoginInput type="password" placeholder="Password" onChange={this.props.inputChange} name="password" value={this.props.password}/>
				<LoginInput type="submit" placeholder="" value="LogIn"/>
			</form>
		)
	}
}

export default Login