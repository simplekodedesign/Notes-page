import React,{useEffect} from "react"
import Header from "../components/Header"
import Main from "../components/Main"


const Home = (props) => {

	console.log(props.token)

	return (
		<div>
			<Header/>
			<Main/>
			<p>{props.token}</p>
		</div>		
	)
}

export default Home