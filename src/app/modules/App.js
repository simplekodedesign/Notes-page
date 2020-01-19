import React,{useState} from "react"
import {Switch,Route} from "react-router-dom"
import Login from "./views/Login"
import SignUp from "./views/SignUp"
import Home from "./views/Home"

const App = () => {

	const [token,setToken] = useState("")

	return(
		<div>
			<Switch>
				<Route exact path="/">
					<Login setToken={setToken}/>
				</Route>
				<Route path="/signup">
					<SignUp setToken={setToken}/>
				</Route>
				<Route path="/home">
					<Home token={token}/>
				</Route>
			</Switch>
		</div>
	)
}

export default App