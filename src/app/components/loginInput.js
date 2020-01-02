import React,{Component} from "react"
import {render} from "react-dom"

class LoginInput extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<input type = {this.props.type}
				   placeholder = {this.props.placeholder}
				   name = {this.props.name}
				   onChange = {this.props.onChange}
				   value = {this.props.value} />
		)
	}
}

export default LoginInput