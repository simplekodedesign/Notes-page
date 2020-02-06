import React,{useState, useEffect} from "react"
import {Switch,Route, Redirect} from "react-router-dom"
import Login from "./views/Login"
import SignUp from "./views/SignUp"
import Home from "./views/Home"

const App = () => {

	const [token, setToken] = useState()

	function changeToken (data) {
		setToken(data)
	}

	return(
		<div>
			<Switch>
				<Route exact path="/">
					<Login setToken={changeToken}/>
				</Route>
				<Route path="/signup">
					<SignUp setToken={changeToken}/>
				</Route>
				<Route path="/home">
					<Home token={token}
							setToken={changeToken}/>
				</Route>
			</Switch>
		</div>
	)
}

export default App