import React from "react"
import {Switch,Route} from "react-router-dom"

const Main = () => {

	return (
		<div>
			<Switch>
				<Route exact path="/home">
					<p>notas</p>
				</Route>
				<Route exact path="/home/add">
					<p>añadir</p>
				</Route>
			</Switch>
		</div>
	)
}

export default Main