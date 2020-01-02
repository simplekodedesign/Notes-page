import React,{Component} from "react"
import {render} from "react-dom"
import Login from "./login"
import Tasks from "./tasks"

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			isLogin: false,
			email: "",
			password: "",
			token: ""
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(input){
		this.setState({[input.target.name]: input.target.value})
	}

	handleSubmit(e){
		e.preventDefault();

		const data = {
			email: this.state.email,
			password: this.state.password
		}

		fetch("/login",{
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(res => res.json())
		.then(res => {
			this.setState({
							isLogin: res.auth,
							token: "bearer "+res.token
						})
		})
		.catch(error => console.log(error))

	}

	index(){
		switch (this.state.isLogin) {
          case true:   
          	return <Tasks token={this.state.token}/>
          case false: 
          	return <Login onSubmit={this.handleSubmit} 
						email={this.state.email} 
						password={this.state.password}
						inputChange={this.handleChange}/>
        }
	}

	render(){
		return(
			<div>{this.index()}</div>
		)
	}
}

export default App