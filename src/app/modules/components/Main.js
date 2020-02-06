import React from "react"
import {Switch,Route} from "react-router-dom"

const Main = (props) => {

	//mostrar notas
	function showTasks(){
		fetch("/tasks",{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"autorization": props.token
			}
		})
		.then(resp => resp.json())
		.then(resp => console.log(resp))
		.catch(err => console.log(err))
	}

	return (
		<div>
			<Switch>
				<Route exact path="/home">
					{showTasks()}
				</Route>
				<Route exact path="/home/add">
					<p>añadir</p>
				</Route>
			</Switch>
		</div>
	)
}

export default Main