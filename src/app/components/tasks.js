import React,{ Component } from "react"
import { render } from "react-dom"

class Tasks extends Component{
	constructor(props){
		super(props)		

		this.state = {
			token: this.props.token
		}

		this.show_tasks = this.show_tasks.bind(this)		
		console.log(this.state)
	}

	show_tasks(){
		let tasks

		fetch("/tasks",{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"autorization": this.state.token
			}
		})
		.then(res => res.json())
		.then(res => tasks = res)
		.catch(error => console.log(error))

		tasks = tasks.map(task => <h1>task.title</h1>)

		return tasks
	}

	render(){
		return(
			<div>
				{
					this.show_tasks()
				}
			</div>
		)
	}
}

export default Tasks
