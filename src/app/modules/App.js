import React from "react"
import {Switch,Route} from "react-router-dom"
import Login from "./views/Login"
import SignUp from "./views/SignUp"

const App = () => (
	<div>
		<Switch>
			<Route exact path="/" component={Login}/>
			<Route path="/signup" component={SignUp}/>
		</Switch>
	</div>
)

export default App