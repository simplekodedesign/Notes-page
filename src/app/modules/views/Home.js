import React from "react"
import Header from "../components/Header"
import Main from "../components/Main"


const Home = (props) => {
	return (
		<div>
			<Header/>
			<Main token={props.token} />
		</div>		
	)
}

export default Home