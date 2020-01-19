import React,{useState} from "react"
import {Switch,Route} from "react-router-dom"
import Login from "./views/Login"
import SignUp from "./views/SignUp"
import Home from "./views/Home"

const App = () => {

	const [token,setToken] = useState({
		token: ""
	})

	return(
		<div>
			<Switch>
				<Route exact path="/" component={Login}/>
				<Route path="/signup" component={SignUp}/>
				<Route path="/home" component={Home}/>
			</Switch>
		</div>
	)
}

export default App